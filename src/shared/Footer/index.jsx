import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <Box component="footer" pt="60px" backgroundColor="#F4F4F4">
      <Container maxWidth="lg">
        <Grid container mb={7}>
          <Grid item xs={6}>
            <img src={logo} alt="" />
            <Typography
              variant="subtitle2"
              color="#878787"
              mt={2.5}
              mb={10}
              lineHeight="130%"
            >
              Ваш путеводитель в области сырья и ингредиентов для пищевой
              промышленности
            </Typography>

            <Typography
              variant="subtitle2"
              fontWeight="600"
              mb={2}
              color="#5F5F5F"
            >
              {" "}
              Контакты
            </Typography>
            <Typography variant="subtitle2" fontWeight="400" color="#707070">
              Г.Бишкек ул. Матросова 1а/21 <br />
              +996 0550 114 477
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{}}>
            <Box
              display="flex"
              justifyContent="end"
              flexDirection="column"
              alignItems="end"
            >
              <Box display="flex" columnGap={2.5}>
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
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Главная
                      </Typography>
                    </Link>
                    <Link to="/catalog">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Каталог{" "}
                      </Typography>
                    </Link>
                    <Link to="/news">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Новости
                      </Typography>
                    </Link>
                    <Link to="/dashboard">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Личный кабинет
                      </Typography>
                    </Link>
                    <Link to="/cart">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Корзина
                      </Typography>
                    </Link>
                    <Link to="/about-us">
                      <Typography
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
                    <Link to="/">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Шоколад
                      </Typography>
                    </Link>
                    <Link to="/catalog">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Сливки{" "}
                      </Typography>
                    </Link>
                    <Link to="/news">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Сыр
                      </Typography>
                    </Link>
                    <Link to="/dashboard">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Декор{" "}
                      </Typography>
                    </Link>
                    <Link to="/cart">
                      <Typography
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Орехи
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                width="219px"
                columnGap={2}
                alignItems="center"
                mt={7}
              >
                <a href="https://instagram.com">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://facebook.com">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://twitter.com">
                  <img src={twitter} alt="" />
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        display="flex"
        justifyContent="center"
        p="20px 0"
        backgroundColor="var(--primary)"
      >
        <Typography variant="subtitle1" color="#FFF">
          @FoodLand - 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
