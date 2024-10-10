import {
  Box,
  Button,
  Dialog,
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
import { handleAuthDialog } from "../../redux/reducers/mainSlice";
import close from "../../assets/images/close.svg";
import message from "../../assets/images/message.svg";
import password from "../../assets/images/password.svg";
import eye from "../../assets/images/eye.svg";
import view from "../../assets/images/view.svg";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const loginData = useSelector((state) => state.profile.loginData);
  const auth = useSelector((state) => state.main.auth);

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const firstUpdate = useRef(true);

  const formik = useFormik({
    initialValues: {
      emailOrLogin: "",
      password: "",
    },
    onSubmit: (data) => {
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
    setLoading(false);

    if (loginData.status == 200) {
      alert("Успешно");
      cookie.set("foodland_token", loginData.data.tokens.access.token, {
        expires: loginData.data.tokens.access.expires,
      });
      instance.defaults.headers.Authorization = `Bearer ${loginData.data.tokens.access.token}`;
      dispatch(handleAuthDialog());
      navigate("/profile");
    } else alert(loginData.data.message);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData]);

  return (
    <>
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
          <Box mb={3} mt={3} display="flex" flexDirection="column" rowGap={2}>
            <TextField
              required
              name="emailOrLogin"
              onChange={formik.handleChange}
              value={formik.values.emailOrLogin}
              placeholder="Логин"
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
          <Button
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
