import { Box, Container, Grid2, IconButton, Typography } from "@mui/material";
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
        <Grid2 container mb={7}>
          <Grid2 item size={6}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
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
              <br />
              <a className="link" href="tel:+996 0550 114 477">
                +996 0550 114 477
              </a>
            </Typography>
          </Grid2>
          <Grid2 item size={6} sx={{}}>
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
                    <Link to="/profile">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Личный кабинет
                      </Typography>
                    </Link>
                    <Link to="/profile/cart">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Корзина
                      </Typography>
                    </Link>
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
                    <Link className="link" to="/catalog/?search=Шоколад">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Шоколад
                      </Typography>
                    </Link>
                    <Link to="/catalog/?search=Сливки">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Сливки{" "}
                      </Typography>
                    </Link>
                    <Link to="/catalog/?search=Сыр">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Сыр
                      </Typography>
                    </Link>
                    <Link to="/catalog/?search=Декор">
                      <Typography
                        className="link"
                        variant="subtitle2"
                        color="#707070"
                        fontWeight={400}
                      >
                        Декор{" "}
                      </Typography>
                    </Link>
                    <Link to="/catalog/?search=Орехи">
                      <Typography
                        className="link"
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
                <IconButton target="_blank" href="https://instagram.com">
                  <img src={instagram} alt="" />
                </IconButton>
                <IconButton target="_blank" href="https://facebook.com">
                  <img src={facebook} alt="" />
                </IconButton>
                <IconButton target="_blank" href="https://twitter.com">
                  <img src={twitter} alt="" />
                </IconButton>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
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
