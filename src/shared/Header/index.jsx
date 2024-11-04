import { Box, Container, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import logo3 from "../../assets/images/logo3.svg";
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
      backgroundColor={filter && "#FFF"}
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
            borderRadius="16px"
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
              isAuth
                ? navigate("/profile/cart")
                : dispatch(handleAuthDialog(true))
            }
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="22"
                r="21.45"
                fill="white"
                stroke="#ECECEC"
                strokeWidth="1.10003"
              />
              <path
                d="M14.636 20.5612C14.8653 18.8415 16.3322 17.5571 18.0672 17.5571H24.1208C25.8558 17.5571 27.3228 18.8415 27.552 20.5612L28.3598 26.621C28.6365 28.6961 27.0221 30.5399 24.9287 30.5399H17.2594C15.1659 30.5399 13.5516 28.6961 13.8282 26.621L14.636 20.5612Z"
                stroke="black"
                strokeWidth="1.29807"
              />
              <path
                d="M24.549 19.2798V16.6826C24.549 14.7709 22.9992 13.2212 21.0875 13.2212V13.2212C19.1758 13.2212 17.6261 14.7709 17.6261 16.6826L17.6261 19.2798"
                stroke="black"
                strokeWidth="1.29807"
                strokeLinecap="round"
              />
              {isAuth && (
                <ellipse
                  cx="27.4402"
                  cy="17.258"
                  rx="4.05679"
                  ry="4.05755"
                  fill="#FF0000"
                />
              )}
            </svg>
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
