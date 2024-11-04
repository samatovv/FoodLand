import {
  Box,
  Breadcrumbs,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import logo from "../../assets/images/logo2.svg";
import call from "../../assets/images/call.svg";
import map from "../../assets/images/map.svg";
import Carousel from "../../shared/Carousel";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const AboutUs = () => {
  const md = useMediaQuery("(min-width:768px)");
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
          <Grid2 item size={{ xs: 6, md: 4 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Создали
            </Typography>
            <Typography
              mt={1}
              mb={2}
              fontSize={{ xs: 36, md: 48 }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              50млн
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
              className="sans"
            >
              С нашей мукой создали более 50 млн макаронс.
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 4 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Испекли
            </Typography>
            <Typography
              mt={1}
              mb={2}
              fontSize={{ xs: 36, md: 48 }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              130тыс
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              className="sans"
              maxWidth={257}
            >
              С нашим сыром испекли более 130 тыс пицц.
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 4 }}>
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
              500т
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              className="sans"
              maxWidth={257}
            >
              Мы продали около 500 тонн шоколада.
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 4 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Приготовлено
            </Typography>
            <Typography
              fontSize={{ xs: 36, md: "64px" }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              1млн
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
              className="sans"
            >
              С использыванием наших сыров было приготовлено более 1 млн суши.
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 4 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Более
            </Typography>
            <Typography
              fontSize={{ xs: 36, md: "64px" }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              200
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
              className="sans"
            >
              Наименований товаров, адаптированных под ваши потребности
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 4 }}>
            <Typography
              fontSize={{ xs: 16, md: "24px" }}
              fontWeight={300}
              className="sans"
              color="var(--primary)"
              width="fit-content"
              pb={1}
              borderBottom="1px solid var(--primary)"
            >
              Доставок
            </Typography>
            <Typography
              fontSize={{ xs: 36, md: "64px" }}
              fontWeight={{ xs: 600, md: 400 }}
            >
              10 000
            </Typography>
            <Typography
              fontSize={{ xs: 12, md: 16 }}
              color="#465659"
              fontWeight={400}
              maxWidth={257}
              className="sans"
            >
              Мы осуществили более 10 000 доставок
            </Typography>
          </Grid2>
        </Grid2>
        <Box mt={10}>
          <Carousel />
        </Box>
        <Grid2 container spacing={{ xs: 2, lg: 4 }} mt={6}>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Typography fontSize={36} mb={3} fontWeight={700} color="#93A27C">
              Наша компания
            </Typography>
            <Typography
              className="sans"
              fontSize={{ xs: 14, md: 16 }}
              fontWeight={400}
            >
              Была основана 2018 году и вот уже несколько лет мы обеспечиваем
              рынок какао продуктами и кондитерским сырьем.
              <br />
              <br />
              Мы верим, что успех кулинарного шедевра начинается с качественных
              ингредиентов. Именно поэтому в нашем продуктовом каталоге более
              200 наименований товаров, адаптированных под ваши потребности,
              будь то крупное предприятие или небольшое кондитерское
              производство. <br />
              <br />
              Мы предлагаем вам не просто сырье, а экспертность и индивидуальный
              подход: всегда готовы помочь найти альтернативу, закрыть срочную
              потребность или предложить уникальное решение.
              <br />
              <br /> Мы помогаем местным кондитерам и шеф-поварам претворять в
              жизнь свои самые смелые кулинарные задумки.
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Typography fontSize={36} mb={3} color="#93A27C" fontWeight={700}>
              Нам доверяют
            </Typography>
            <Typography
              className="sans"
              fontSize={{ xs: 14, md: 16 }}
              fontWeight={400}
            >
              За профессиональный подход к своему делу, ответственность и
              честность. <br />
              <br />
              Мы гордимся долгосрочными и крепкими отношениями с нашими
              партнёрами и активно развиваем новые. <br />
              <br /> Мы сотрудничаем с ведущими мировыми производителями.
              Постоянное обновление ассортимента и изучение рыночных тенденций
              позволяют нам предлагать лучшие условия и инновационные продукты
              для вашего производства.
              <br />
              <br /> <b>FOODLAND</b> — Ваш путеводитель в области сырья и
              ингредиентов для пищевой промышленности.
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container mt={5} spacing={4}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box borderRadius="20px" border="2px solid #DFDFDF" p={4}>
              <Typography
                className="sans"
                fontSize={{ xs: 33, md: 48 }}
                fontWeight={700}
              >
                Свяжитесь с нами
              </Typography>
              <Typography
                className="sans"
                mt={2}
                fontSize={20}
                fontWeight={400}
              >
                Мы всегда рады вашим вопросам и предложениям!
              </Typography>
              <Typography
                className="sans"
                fontSize={20}
                fontWeight={700}
                mt={3}
                mb={2.5}
              >
                Контакты
              </Typography>
              <Box display="flex" columnGap={2}>
                <img src={call} alt="" />
                <div>
                  <Typography
                    fontSize={16}
                    fontWeight={600}
                    color="#A8A8A8"
                    className="sans"
                    mb={0.5}
                  >
                    Телефон
                  </Typography>
                  <a href="tel:+996 0550 114 477">
                    <Typography fontSize={20} className="sans" fontWeight={400}>
                      +996 0550 114 477
                    </Typography>
                  </a>
                </div>
              </Box>
              <Box display="flex" columnGap={2} mt={2}>
                <img src={map} alt="" />
                <div>
                  <Typography
                    fontSize={16}
                    fontWeight={600}
                    color="#A8A8A8"
                    className="sans"
                    mb={0.5}
                  >
                    Адрес
                  </Typography>
                  <Typography fontSize={20} className="sans" fontWeight={400}>
                    Г.Бишкек ул. Матросова 1а/21{" "}
                  </Typography>
                </div>
              </Box>
              <Box pt={3} borderTop="1px solid #DFDFDF" mt={3}>
                <Typography fontSize={20} fontWeight={600} mb={2}>
                  Подписывайтесь на нас:
                </Typography>
                <Box display="flex" alignItems="center" columnGap="12px">
                  <a
                    href="https://www.instagram.com/foodland_ingredients/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="" />
                  </a>
                  {/* <a href="https://facebook.com">
                    <img src={facebook} alt="" />
                  </a>
                  <a href="https://twiiter.com">
                    <img src={twitter} alt="" />
                  </a> */}
                </Box>
              </Box>
            </Box>
          </Grid2>
          {md && (
            <Grid2 size={{ xs: 12, md: 6 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5457.859234571664!2d74.61607174322945!3d42.85472220021446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb648647b605d%3A0x262167cc7c751796!2zMdCwLCAyMSDRg9C7LiDQnNCw0YLRgNC-0YHQvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1728983722836!5m2!1sru!2skg"
                width="100%"
                height={!md ? "389px" : "100%"}
                style={{ border: "0", borderRadius: "20px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid2>
          )}
        </Grid2>
      </Container>
      {!md && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5457.859234571664!2d74.61607174322945!3d42.85472220021446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb648647b605d%3A0x262167cc7c751796!2zMdCwLCAyMSDRg9C7LiDQnNCw0YLRgNC-0YHQvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1728983722836!5m2!1sru!2skg"
          width="100%"
          height={!md ? "389px" : "100%"}
          style={{ border: "0", borderRadius: "0", marginTop: 32 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </Box>
  );
};

export default AboutUs;
