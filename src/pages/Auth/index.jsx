import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducers/profile";
import cookie from "cookie_js";
import { useLocation, useNavigate } from "react-router";
import { instance } from "../../api";
import {
  handleAuthDialog,
  handleLoading,
} from "../../redux/reducers/mainSlice";
import close from "../../assets/images/close.svg";
import message from "../../assets/images/message.svg";
import password from "../../assets/images/password.svg";
import eye from "../../assets/images/eye.svg";
import view from "../../assets/images/view.svg";
import Alert from "../../components/Alert";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const loginData = useSelector((state) => state.profile.loginData);
  const auth = useSelector((state) => state.main.auth);

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const firstUpdate = useRef(true);

  const formik = useFormik({
    initialValues: {
      emailOrLogin: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (data) => {
      dispatch(handleLoading(true));
      dispatch(login(data));
    },
  });

  const closeHandle = () => {
    // if (!location.pathname.includes("catalog"))
    dispatch(handleAuthDialog());
  };

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // hide linear progress
    dispatch(handleLoading(false));

    setOpen(true);

    if (loginData?.status == 200) {
      if (formik.values.rememberMe) {
        cookie.set("foodland_token", loginData.data.tokens.access.token, {
          expires: loginData.data.tokens.access.expires,
        });
        instance.defaults.headers.Authorization = `Bearer ${loginData.data.tokens.access.token}`;
      } else
        sessionStorage.setItem("token", loginData.data.tokens.access.token);
      instance.defaults.headers.Authorization = `Bearer ${loginData.data.tokens.access.token}`;

      dispatch(handleAuthDialog());
      // navigate("/profile");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData]);

  return (
    <>
      <Alert
        message={
          loginData?.status === 200 ? "Успешно!" : loginData?.data?.message
        }
        open={open}
        severity={loginData?.status === 200 ? "success" : "error"}
        setOpen={() => setOpen(false)}
      />
      <Dialog
        open={auth}
        sx={{
          "& .MuiPaper-root": {
            p: 4,
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            "& .MuiIconButton-root": {
              alignSelf: "end",
            },
          },
        }}
        onClose={closeHandle}
      >
        <IconButton onClick={closeHandle}>
          <img src={close} alt="" />
        </IconButton>
        <Box
          component="form"
          mt={2}
          onSubmit={formik.handleSubmit}
          display="flex"
          flexDirection="column"
          minWidth="30%"
          minHeight="30%"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2!important",
            },
          }}
        >
          <div>
            <Typography fontSize={24} mb={1} fontWeight={700}>
              Вход в личный кабинет
            </Typography>
            <Typography
              fontSize={16}
              maxWidth={354}
              fontWeight={400}
              color="#4A4A4A"
              className="sans"
            >
              Следите за своими заказами и персонализированными предложениями
            </Typography>
          </div>
          <Box
            mb={2}
            mt={3}
            alignItems="end"
            display="flex"
            flexDirection="column"
            rowGap={2}
          >
            <TextField
              required
              name="emailOrLogin"
              onChange={formik.handleChange}
              value={formik.values.emailOrLogin}
              placeholder="Логин"
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={message} alt="" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              fullWidth
              required
              placeholder="Пароль"
              name="password"
              type={visible ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.password}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={password} alt="" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      sx={{ cursor: "pointer" }}
                      onClick={() => setVisible(!visible)}
                      position="start"
                    >
                      <img src={visible ? view : eye} alt="" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                onChange={formik.handleChange}
                value={formik.values.rememberMe}
              />
            }
            label="Запомнить меня"
          />
          <Button
            sx={{ mt: "14px" }}
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Войти
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default Auth;
