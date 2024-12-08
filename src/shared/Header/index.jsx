import {
  Box,
  Container,
  IconButton,
  ListItemButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import logo3 from "../../assets/images/logo3.svg";
import logo from "../../assets/images/logo1.svg";
import auth from "../../assets/images/auth.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Burger from "../../assets/images/Burger";
import { handleAuthDialog, handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../ProtectedRoutes";
import { getProductsNames, setSearch } from "../../redux/reducers/products";
import Fuse from "fuse.js";
import Search from "../Search";

const Header = ({ cart, setCart }) => {
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
          onMouseLeave={() => setOpen(false)}
        >
          {/* <Search /> */}
          {/* {md && (
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
                      borderRadius: "10px",
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
                  strokeWidth="1.5"
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
                {searched?.map((item, idx) => (
                  <ListItemButton
                    key={idx}
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
          )} */}
          <IconButton
            mr={1}
            onClick={() =>
              isAuth
                ? navigate("/profile/cart")
                : dispatch(handleAuthDialog(true))
            }
          >
            <Box
              component="svg"
              sx={{
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
              <rect width="44" height="44" rx="10" fill="white" />
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
                  cx="27.1349"
                  cy="16.0575"
                  rx="4.05679"
                  ry="4.05755"
                  fill="#FF0000"
                />
              )}
            </Box>
          </IconButton>
          <IconButton
            onClick={() =>
              isAuth ? navigate("/profile") : dispatch(handleAuthDialog(true))
            }
          >
            <Box
              component="svg"
              width="44px"
              height="44px"
              sx={{
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
              <rect width="44" height="44" rx="10" fill="white" />
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
