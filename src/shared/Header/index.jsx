import {
  Backdrop,
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import logo3 from "../../assets/images/logo3.svg";
import logo from "../../assets/images/logo1.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Burger from "../../assets/images/Burger";
import { handleAuthDialog, handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../ProtectedRoutes";
import SearchHeader from "./Search";

const Header = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const md = useMediaQuery("(min-width:769px)");
  const isAuth = useAuth();

  const filter = useSelector((state) => state.main.filter);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      component="header"
      position="fixed"
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
        <Box
          display="flex"
          justifyContent="space-between"
          width="69%"
          alignItems="center"
        >
          <Link to="/" style={{ height: 44 }}>
            {md ? (
              <Box component="img" src={logo} alt="" />
            ) : (
              <Box component="img" src={logo3} alt="" />
            )}
          </Link>
          {md && (
            <Box
              component="nav"
              backgroundColor="#FFF"
              borderRadius="10px"
              p="12px 32px"
              display="flex"
              columnGap={8}
              border="1px solid #ECECEC"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/"
              >
                Главная
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/about-us"
              >
                О нас
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/news"
              >
                Новости
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/catalog"
              >
                Каталог
              </NavLink>
            </Box>
          )}
        </Box>
        <Box
          ml="16px"
          display="flex"
          justifyContent="end"
          width={{ xs: "100%", md: "31%" }}
          alignItems="center"
        >
          <Box
            component="svg"
            onClick={handleOpen}
            sx={{
              cursor: "pointer",

              "& rect": {
                transition: "all 0.2s ease",
              },
              "&:hover rect": {
                fill: "var(--primary)",
              },
            }}
            width="44px"
            height="44px"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              fill="white"
              stroke="#ECECEC"
            />
            <path
              d="M25.7333 25.7333L30 30M27.8667 20.9333C27.8667 24.7625 24.7625 27.8667 20.9333 27.8667C17.1042 27.8667 14 24.7625 14 20.9333C14 17.1042 17.1042 14 20.9333 14C24.7625 14 27.8667 17.1042 27.8667 20.9333Z"
              stroke="black"
              stroke-width="1.5"
            />
          </Box>
          <SearchHeader open={open} setOpen={setOpen} />
          <Box
            component="svg"
            onClick={() =>
              isAuth
                ? navigate("/profile/cart")
                : dispatch(handleAuthDialog(true))
            }
            sx={{
              cursor: "pointer",
              mr: { xs: "5px", md: 2 },
              ml: { xs: "5px", md: 2 },

              "& rect": {
                transition: "all 0.2s ease",
              },
              "&:hover rect": {
                fill: "var(--primary)",
              },
            }}
            width="44px"
            height="44px"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              fill="white"
              stroke="#ECECEC"
            />
            <path
              d="M15.3302 20.34C15.5595 18.6203 17.0265 17.3359 18.7614 17.3359H24.8151C26.55 17.3359 28.017 18.6203 28.2462 20.34L29.054 26.3998C29.3307 28.4749 27.7163 30.3187 25.6229 30.3187H17.9536C15.8601 30.3187 14.2458 28.4749 14.5224 26.3998L15.3302 20.34Z"
              stroke="black"
              stroke-width="1.29807"
            />
            <path
              d="M25.2432 19.0586V16.4614C25.2432 14.5497 23.6934 13 21.7817 13V13C19.8701 13 18.3203 14.5497 18.3203 16.4614L18.3203 19.0586"
              stroke="black"
              stroke-width="1.29807"
              stroke-linecap="round"
            />
            {cart && (
              <ellipse
                cx="27.1344"
                cy="16.0575"
                rx="4.05679"
                ry="4.05755"
                fill="#FF0000"
              />
            )}
          </Box>
          <Box
            onClick={() =>
              isAuth ? navigate("/profile") : dispatch(handleAuthDialog(true))
            }
            component="svg"
            width="44px"
            height="44px"
            sx={{
              cursor: "pointer",
              "& rect": {
                transition: "all 0.2s ease",
              },
              "&:hover rect": {
                fill: "var(--primary)",
              },
            }}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              fill="white"
              stroke="#ECECEC"
            />
            <circle
              cx="3.80793"
              cy="3.80793"
              r="3.80793"
              transform="matrix(-1 0 0 1 25.4717 14)"
              stroke="black"
              stroke-width="1.42797"
            />
            <path
              d="M15 27.2653C15 26.4462 15.5149 25.7156 16.2862 25.4401V25.4401C19.7638 24.1981 23.564 24.1981 27.0415 25.4401V25.4401C27.8129 25.7156 28.3278 26.4462 28.3278 27.2653V28.5176C28.3278 29.648 27.3266 30.5164 26.2075 30.3565L25.2989 30.2267C22.8878 29.8823 20.44 29.8823 18.0289 30.2267L17.1203 30.3565C16.0012 30.5164 15 29.648 15 28.5176V27.2653Z"
              stroke="black"
              stroke-width="1.42797"
            />
          </Box>
          {!md && (
            <IconButton
              sx={{ p: 0, ml:'5px' }}
              onClick={() => dispatch(handleDrawer(true))}
            >
              <Burger />
            </IconButton>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
