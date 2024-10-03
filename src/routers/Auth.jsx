import {
  Box,
  Button,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reducers/profile";
import cookie from "cookie_js";
import { useNavigate } from "react-router";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginData = useSelector((state) => state.profile.loginData);

  const [loading, setLoading] = useState(false);
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
      navigate("/profile");
    } else alert(loginData.data.message);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData]);

  return (
    <>
      {loading && (
        <LinearProgress
          color="primary"
          sx={{
            position: "fixed",
            zIndex: 1400,
            top: 0,
            left: 0,
            width: "100%",
          }}
        />
      )}
      <Header />
      <Box
        component="section"
        height="70vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          border="1px solid #E2E2E2"
          borderRadius="15px"
          p="15px"
          display="flex"
          flexDirection="column"
          rowGap={2}
          minWidth="30%"
          minHeight="30%"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2!important",
            },
          }}
        >
          <Typography variant="h4" textAlign="center" fontWeight={700}>
            Войти в аккаунт
          </Typography>
          <TextField
            required
            name="emailOrLogin"
            onChange={formik.handleChange}
            value={formik.values.emailOrLogin}
            placeholder="Email"
          />
          <TextField
            required
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Войти
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Auth;
