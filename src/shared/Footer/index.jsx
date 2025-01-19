import {
  Box,
  Container,
  Grid2,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.svg";
import logo3 from "../../assets/images/logo3.svg";
import { Link, useNavigate } from "react-router-dom";
import instagram from "../../assets/images/instagram.svg";
import moore from "../../assets/images/moore.svg";
import { useAuth } from "../ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { handleAuthDialog } from "../../redux/reducers/mainSlice";

const Footer = () => {
  const md = useMediaQuery("(min-width:768px)");
  const isAuth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = [
    {
      title: "Шоколад и какао продукты",
      id: "670cfc0e8d01bf78e1ad9a6c",
    },
    { title: "Молочная продукция", id: "670cfc198d01bf78e1ad9b16" },
    { title: "Ингредиенты", id: "670cfc088d01bf78e1ad9a53" },
    { title: "Продукция для Бариста", id: "670cfc148d01bf78e1ad9ad0" },
    {
      title: "Покрытия и наполнители",
      id: "670cfc0a8d01bf78e1ad9a5c",
    },
    {
      title: "Пищевая печать",
      id: "670cfc1a8d01bf78e1ad9b25",
    },
  ];
  return (
    <Box
      component="footer"
      pt={{ xs: 2, md: "60px" }}
      backgroundColor="#F4F4F4"
      sx={{
        "& *": {
          fontFamily: "Open Sans!important",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container mb={{ xs: "41px", md: 7 }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Link to="/">
              {md ? (
                <Box component="img" src={logo} alt="" />
              ) : (
                <Box component="img" src={logo3} alt="" />
              )}
            </Link>
            <Typography
              variant="subtitle2"
              color="#878787"
              mt={{ xs: "28px", md: 2.5 }}
              mb={{ xs: 2.5, md: 10 }}
              lineHeight="130%"
            >
              Ваш путеводитель в области сырья и ингредиентов для пищевой
              промышленности
            </Typography>
            {md && (
              <Typography
                variant="subtitle2"
                fontWeight="600"
                mb={2}
                color="#5F5F5F"
              >
                {" "}
                Контакты
              </Typography>
            )}
            <Typography variant="subtitle2" fontWeight="400" color="#707070">
              <a className="link" href="https://go.2gis.com/m1271">
                Г.Бишкек ул. Матросова 1а/21
              </a>
              <br />
              <br />
              <a className="link" href="tel:+996 0550 114 477">
                +996 0550 114 477
              </a>
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{}}>
            <Box
              mt={{ xs: "22px", md: 0 }}
              display="flex"
              justifyContent={{ xs: "start", md: "end" }}
              flexDirection="column"
              alignItems={{ xs: "start", md: "end" }}
            >
              <Box display="flex" columnGap={10}>
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="#5F5F5F"
                    fontWeight={600}
                    mb={2}
                  >
                    Навигация
                  </Typography>
                  <Box
                    component="nav"
                    display="flex"
                    flexDirection="column"
                    rowGap={1}
                  >
                    <Link to="/">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Главная
                      </Typography>
                    </Link>
                    <Link to="/catalog">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Каталог{" "}
                      </Typography>
                    </Link>
                    <Link to="/news">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Новости
                      </Typography>
                    </Link>

                    <Typography
                      onClick={() =>
                        isAuth
                          ? navigate("/profile")
                          : dispatch(handleAuthDialog(true))
                      }
                      sx={{ cursor: "pointer" }}
                      className="link"
                      variant="subtitle2"
                      color="#707070"
                      fontWeight={400}
                    >
                      Личный кабинет
                    </Typography>

                    <Typography
                      onClick={() =>
                        isAuth
                          ? navigate("/profile/cart")
                          : dispatch(handleAuthDialog(true))
                      }
                      sx={{ cursor: "pointer" }}
                      className="link"
                      variant="subtitle2"
                      color="#707070"
                      fontWeight={400}
                    >
                      Корзина
                    </Typography>

                    <Link to="/about-us">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        О нас
                      </Typography>
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="#5F5F5F"
                    fontWeight={600}
                    mb={2}
                  >
                    Каталог
                  </Typography>
                  <Box
                    component="nav"
                    display="flex"
                    flexDirection="column"
                    rowGap={1}
                  >
                    {categories.map((item, idx) => (
                      <Link
                        key={idx}
                        className="link"
                        to={`/catalog/?search=&categoryIds=${item.id}&page=1`}
                      >
                        <Typography
                          className="link"
                          variant="subtitle2"
                          color="#707070"
                          fontWeight={400}
                        >
                          {item?.title}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                width="219px"
                columnGap={2}
                alignItems="center"
                mt={{ xs: 2.5, md: 7 }}
              >
                <IconButton
                  target="_blank"
                  href="https://www.instagram.com/foodland_ingredients/"
                >
                  <img src={instagram} alt="" />
                </IconButton>
                {/* <IconButton target="_blank" href="https://facebook.com">
                  <img src={facebook} alt="" />
                </IconButton>
                <IconButton target="_blank" href="https://twitter.com">
                  <img src={twitter} alt="" />
                </IconButton> */}
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      <Box
        display="flex"
        justifyContent="space-between"
        p={{ xs: "20px 10px", md: "20px 80px" }}
        backgroundColor="var(--primary)"
      >
        <Typography variant="subtitle1" color="#FFF">
          @FOODLAND - 2024
        </Typography>
        <a target="_blank" rel="noreferrer" href="https://to-moore.com/">
          <img src={moore} alt="" />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
