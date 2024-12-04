import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  ListItemButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import logo3 from "../../assets/images/logo3.svg";
import logo from "../../assets/images/logo1.svg";
import cart from "../../assets/images/cart.svg";
import auth from "../../assets/images/auth.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Burger from "../../assets/images/Burger";
import { handleAuthDialog, handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../ProtectedRoutes";
import {
  getProducts,
  getProductsNames,
  setSearch,
} from "../../redux/reducers/products";
import Find from "../../assets/images/Find";
import CloseSearch from "../../assets/images/CloseSearch";
import Fuse from "fuse.js";

const Header = ({ cart, setCart }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const md = useMediaQuery("(min-width:769px)");
  const isAuth = useAuth();

  const filter = useSelector((state) => state.main.filter);
  const names = useSelector((state) => state.products.names);

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [full, setFull] = useState(false);
  const [searched, setSearched] = useState([]);

  const input = useRef(null);

  const options = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.2,
    keys: ["name"],
  };

  const fuse = new Fuse(names, options);

  const handleSearch = (event) => {
    const { value } = event.target;

    if (!value) setSearched(names);

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setSearched(items);
  };

  useEffect(() => {
    dispatch(getProductsNames());
  }, []);

  useEffect(() => {
    if (Array.isArray(names)) setSearched(names);
  }, [names]);

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
              borderRadius="100px"
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
          onMouseLeave={() => setOpen(false)}
        >
          {md && (
            <Box
              component="form"
              display="flex"
              alignItems="center"
              onClick={() => {
                setFull(!full);
                input.current.click();
              }}
              sx={
                md
                  ? {
                      border: "1px solid #ECECEC",
                      background: "#FFF",
                      p: "10px",
                      mr: 1,
                      borderRadius: "100px",
                      transition: "all 0.3s linear",
                      position: "relative",
                      width: "7%",
                      "& input": {
                        border: "none",
                        outline: "none",
                        width: 0,
                        background: "none",
                      },

                      "&:hover": {
                        width: "60%",
                        "& input": {
                          width: "auto",
                        },
                      },
                    }
                  : {
                      border: "1px solid #ECECEC",
                      background: "#FFF",
                      p: "10px",
                      mr: 1,
                      borderRadius: "100px",
                      transition: "all 0.3s linear",
                      position: full ? "fixed" : "relative",
                      width: !full ? "9%" : "87%",
                      zIndex: 10,
                      "& input": {
                        border: "none",
                        outline: "none",
                        width: full ? "100%" : "1%",
                        background: "none",
                      },
                    }
              }
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                navigate(
                  `/catalog/?search=${encodeURI(value)}&categoryIds=&page=1`
                );
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7333 15.7333L20 20M17.8667 10.9333C17.8667 14.7625 14.7625 17.8667 10.9333 17.8667C7.10416 17.8667 4 14.7625 4 10.9333C4 7.10416 7.10416 4 10.9333 4C14.7625 4 17.8667 7.10416 17.8667 10.9333Z"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
              <input
                ref={input}
                type="text"
                value={value}
                onChange={(e) => {
                  if (!open) setOpen(!open);
                  setValue(e.target.value);
                  dispatch(setSearch(e.target.value));
                  handleSearch(e);
                }}
                placeholder="Найти..."
              />
              <Box
                onMouseEnter={() => setOpen(true)}
                sx={{
                  opacity: open ? "1" : "0",
                  visibility: open ? "unset" : "hidden",
                  height: open ? "auto" : "0px",
                  maxHeight: 200,
                  overflow: "scroll",
                  transition: "height 300ms linear",
                  backgroundColor: "#F9F9F9!important",
                  p: "24px 0 15px",
                  borderRadius: "0 0 20px 20px",
                  position: "absolute",
                  top: 28,
                  right: 0,
                  width: "-webkit-fill-available",
                  zIndex: "-1!important",
                }}
              >
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    navigate(
                      `/catalog/?search=${encodeURI(value)}&categoryIds=&page=1`
                    );
                  }}
                  mb={0.8}
                >
                  <Typography>{value}</Typography>
                </ListItemButton>
                {searched?.map((item) => (
                  <ListItemButton
                    onClick={() => {
                      setOpen(false);
                      setValue(item.name);
                      navigate(
                        `/catalog/?search=${encodeURI(
                          item.name
                        )}&categoryIds=&page=1`
                      );
                    }}
                    mb={0.8}
                  >
                    <Typography>{item.name}</Typography>
                  </ListItemButton>
                ))}
              </Box>
            </Box>
          )}

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
              {cart && (
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
