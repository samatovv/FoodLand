import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
} from "@mui/material";
import React from "react";
import { handleDrawer } from "../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo3.svg";
import auth from "../assets/images/auth.svg";
import Close from "../assets/images/Close";
import { NavLink } from "react-router-dom";
import ButtonMore from "../components/ButtonMore";

const DrawerNav = () => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.main.open);
  const profile = useSelector((state) => state.profile.data);

  return (
    <Drawer
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          pt: "25px",
          pb:'50px'
        },
      }}
      open={open}
      onClose={() => dispatch(handleDrawer(false))}
      anchor="right"
    >
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Box display="flex" alignItems='center' justifyContent="space-between">
            <img src={logo} width={108} height={44} alt="" />
            <IconButton onClick={() => dispatch(handleDrawer(false))}>
              <Close />
            </IconButton>
          </Box>
          <List
            sx={{
              "& a": {
                fontSize: 24,
                fontWeight: 600,
                color: "#2F2F2F",
                textAlign: "center",
                display: "block",
              },
              "& div": {
                display: "block",
                width: "100%",
                p: "20px",
                borderBottom: "1px solid #DBDBDB",
              },
            }}
          >
            <ListItemButton>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/"
              >
                Главная
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/about-us"
              >
                О нас
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/news"
              >
                Новости
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/catalog"
              >
                Каталог
              </NavLink>
            </ListItemButton>
            {/* <ListItemButton>
              {profile?.id ? (
                <NavLink
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={({ isActive }) =>
                    isActive ? "sans active" : "sans"
                  }
                  to="/profile"
                >
                  <img
                    style={{
                      objectFit: "cover",
                      borderRadius: "100px",
                      marginRight: 16,
                    }}
                    width={40}
                    height={40}
                    src={!profile?.image?.url ? auth : profile?.image?.url}
                    alt=""
                  />
                  {profile?.name}
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "sans active" : "sans secondary"
                  }
                  to="/login"
                >
                  Войти
                </NavLink>
              )}
            </ListItemButton>
            <ListItemButton>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sans active" : "sans"
                }
                to="/profile/cart"
              >
                Корзина
              </NavLink>
            </ListItemButton> */}
          </List>
        </div>
        <ButtonMore
          fullWidth
          sx={{ border: "1px solid #CACACA" }}
          txt="Заказать звонок"
          color="primary"
          variant="contained"
        />
      </Container>
    </Drawer>
  );
};

export default DrawerNav;
