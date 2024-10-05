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
        <Box display="flex" mt={3}>
          <img src={logo} alt="" />
          <Box ml="101px">
            <Typography
              fontSize={24}
              fontWeight={700}
              color="var(--primary)"
              mb={1}
            >
              Ваш путеводитель в области:
            </Typography>
            <Typography
              variant="h3"
              fontWeight={800}
              textTransform="uppercase"
              maxWidth={1059}
            >
              Сырья и ингредиентов для пищевой промышленности
            </Typography>
          </Box>
        </Box>
        <Grid2 container spacing={9} mt={11}>
          <Grid2 item size={3}>
            <Typography
              fontSize="24px"
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Продали
            </Typography>
            <Typography fontSize="64px" fontWeight={400}>
              10K
            </Typography>
            <Typography
              variant="subtitle1"
              color="#465659"
              fontWeight={400}
              maxWidth={257}
            >
              Все товары проходят обязательную сертификацию
            </Typography>
          </Grid2>
          <Grid2 item size={3}>
            <Typography
              fontSize="24px"
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Клиентов
            </Typography>
            <Typography fontSize="64px" fontWeight={400}>
              1200
            </Typography>
            <Typography
              variant="subtitle1"
              color="#465659"
              fontWeight={400}
              maxWidth={257}
            >
              Все товары проходят обязательную сертификацию
            </Typography>
          </Grid2>
          <Grid2 item size={3}>
            <Typography
              fontSize="24px"
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Выбор
            </Typography>
            <Typography fontSize="64px" fontWeight={400}>
              30Т
            </Typography>
            <Typography
              variant="subtitle1"
              color="#465659"
              fontWeight={400}
              maxWidth={257}
            >
              Все товары проходят обязательную сертификацию
            </Typography>
          </Grid2>
          <Grid2 item size={3}>
            <Typography
              fontSize="24px"
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Сертифицированы
            </Typography>
            <Typography fontSize="64px" fontWeight={400}>
              56К
            </Typography>
            <Typography
              variant="subtitle1"
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
        <Grid2 container spacing="250px" mt={6}>
          <Grid2 item size={6}>
            <Typography variant="h3" mb={3} fontWeight={700}>
              Мы предлагаем
            </Typography>
            <Typography className="sans" fontSize={24} fontWeight={400}>
              Не просто сырье, а экспертность и индивидуальный подход: всегда
              готовы помочь найти альтернативу, закрыть срочную потребность или
              предложить уникальное решение.
            </Typography>
          </Grid2>
          <Grid2 item size={6}>
            <Typography
              variant="h3"
              color="var(--primary)"
              mb={3}
              fontWeight={700}
            >
              Мы предлагаем
            </Typography>
            <Typography className="sans" fontSize={24} fontWeight={400}>
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
