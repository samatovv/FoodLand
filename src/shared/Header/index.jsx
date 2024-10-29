import { Box, Container, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import logo3 from "../../assets/images/logo.svg";
import logo from "../../assets/images/logo1.svg";
import cart from "../../assets/images/cart.svg";
import auth from "../../assets/images/auth.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Burger from "../../assets/images/Burger";
import { handleAuthDialog, handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../ProtectedRoutes";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const md = useMediaQuery("(min-width:769px)");
  const isAuth = useAuth();

  const filter = useSelector((state) => state.main.filter);

  return (
    <Box
      component="header"
      position={!location.pathname.includes("/profile") && "fixed"}
      zIndex={filter ? 1201 : 100}
      // backgroundColor={{ xs: "#FFFFFF", md: "transparent" }}
      width="100%"
      p={{ xs: "11px 0", md: "25px 0 0" }}
      borderBottom={filter ? "1px solid #D3D3D3" : "none"}
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
          {md ? (
            <Box component="img" src={logo} alt="" />
          ) : (
            <Box
              component="img"
              width="97px"
              height="38px"
              src={logo3}
              alt=""
            />
          )}
        </Link>
        {md && (
          <Box
            component="nav"
            backgroundColor="#FFF"
            borderRadius='16px'
            p="12px 32px"
            display="flex"
            columnGap={8}
            border="1px solid #ECECEC"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "sans active" : "sans")}
              to="/"
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "sans active" : "sans")}
              to="/about-us"
            >
              О нас
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "sans active" : "sans")}
              to="/news"
            >
              Новости
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "sans active" : "sans")}
              to="/catalog"
            >
              Каталог
            </NavLink>
          </Box>
        )}

        <Box>
          <IconButton
            mr={1}
            onClick={() =>
              isAuth ? navigate("/profile/cart") : dispatch(handleAuthDialog(true))
            }
          >
            <img src={cart} width="48px" height="48px" alt="Корзина" />
          </IconButton>
          <IconButton
            onClick={() =>
              isAuth ? navigate("/profile") : dispatch(handleAuthDialog(true))
            }
          >
            <img src={auth} width="48px" height="48px" alt="Авторизация" />
          </IconButton>
          {!md && (
            <IconButton onClick={() => dispatch(handleDrawer(true))}>
              <Burger />
            </IconButton>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
