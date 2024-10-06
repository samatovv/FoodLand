import { Box, Breadcrumbs, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import logo from "../../assets/images/logo2.svg";
import Carousel from "../../shared/Carousel";

const AboutUs = () => {
  const breadcrumbs = [
    <Link key="1" className="sans" to="/">
      Главная
    </Link>,
    <Typography className="sans" key="2" sx={{ color: "text.primary" }}>
      О нас
    </Typography>,
  ];
  return (
    <Box component="section" p="40px 0 80px">
      <Container>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} mt={3}>
          <img src={logo} width={116} height={40} alt="" />
          <Box mt={{ xs: 2, md: 0 }} ml={{ xs: 0, md: "101px" }}>
            <Typography
              fontSize={{ xs: 16, md: 24 }}
              fontWeight={700}
              color="var(--primary)"
              mb={1}
            >
              Ваш путеводитель в области:
            </Typography>
            <Typography
              fontSize={{ xs: 20, md: 40 }}
              fontWeight={800}
              textTransform="uppercase"
              maxWidth={1059}
            >
              Сырья и ингредиентов для пищевой промышленности
            </Typography>
          </Box>
        </Box>
        <Grid2 container spacing={{ xs: 1, lg: 9 }} mt={{ xs: "28px", md: 11 }}>
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Продали
            </Typography>
            <Typography
              fontSize={{ xs: 36, md: "64px" }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              10K
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
            >
              Все товары проходят обязательную сертификацию
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Клиентов
            </Typography>
            <Typography
              fontSize={{ xs: 36, md: "64px" }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              1200
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
            >
              Все товары проходят обязательную сертификацию
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Выбор
            </Typography>
            <Typography
              fontSize={{ xs: 36, md: "64px" }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              30Т
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
            >
              Все товары проходят обязательную сертификацию
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Сертифицированы
            </Typography>
            <Typography
              fontSize={{ xs: 36, md: "64px" }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              56К
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
            >
              Все товары проходят обязательную сертификацию
            </Typography>
          </Grid2>
        </Grid2>
        <Box mt={10}>
          <Carousel />
        </Box>
        <Grid2 container spacing={{ xs: 2, lg: "250px" }} mt={6}>
          <Grid2 item size={6}>
            <Typography fontSize={{ xs: 16, md: 48 }} mb={3} fontWeight={700}>
              Мы предлагаем
            </Typography>
            <Typography
              className="sans"
              fontSize={{ xs: 14, md: 24 }}
              fontWeight={400}
            >
              Не просто сырье, а экспертность и индивидуальный подход: всегда
              готовы помочь найти альтернативу, закрыть срочную потребность или
              предложить уникальное решение.
            </Typography>
          </Grid2>
          <Grid2 item size={6}>
            <Typography
              fontSize={{ xs: 16, md: 48 }}
              color="var(--primary)"
              mb={3}
              fontWeight={700}
            >
              Мы предлагаем
            </Typography>
            <Typography
              className="sans"
              fontSize={{ xs: 14, md: 24 }}
              fontWeight={400}
            >
              Не просто сырье, а экспертность и индивидуальный подход: всегда
              готовы помочь найти альтернативу, закрыть срочную потребность или
              предложить уникальное решение.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default AboutUs;
