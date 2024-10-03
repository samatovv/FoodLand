import { Box, Container, IconButton } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/cart.svg";
import auth from "../../assets/images/auth.svg";

import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Box
      component="header"
      position={!location.pathname.includes("/profile") && "fixed"}
      zIndex={2}
      top
      width="100%"
      pt="25px"
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& a": {
            color: "#2F2F2F",
            transition: "all 0.2s linear",
            fontSize: 15,
            "&:hover": {
              color: "var(--primary)",
            },
          },
        }}
      >
        <Link to="/">
          <img src={logo} alt="Логотип FOODLAND" />
        </Link>
        <Box
          component="nav"
          backgroundColor="#FFF"
          borderRadius={100}
          p="12px 32px"
          display="flex"
          columnGap={8}
          border="1px solid #ECECEC"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about-us"
          >
            О нас
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/news"
          >
            Новости
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/catalog"
          >
            Каталог
          </NavLink>
        </Box>
        <Box>
          <IconButton mr={1}>
            <Link to="/profile/cart">
              <img src={cart} alt="Корзина" />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/profile">
              <img src={auth} alt="Авторизация" />
            </Link>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
