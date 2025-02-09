/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import call from "../../assets/images/call.svg";
import map from "../../assets/images/map.svg";
import Carousel from "../../shared/Carousel";
import instagram from "../../assets/images/instagram.svg";
import CountUp from "react-countup";

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
  const stats = [
    { value: 50000000, label: "С нашей мукой создали более 50 млн макаронс." },
    { value: 130000, label: "С нашим сыром испекли более 130 тыс пицц." },
    { value: 500,label: "Мы продали около 500 тонн шоколада." },
    { value: 1000000, label: "С использованием наших сыров было приготовлено более 1 млн суши." },
    { value: 200, label: "Наименований товаров, адаптированных под ваши потребности." },
    { value: 10000, label: "Мы осуществили более 10 000 доставок." }
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
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={{ sm: 0, md: 15, lg: 30 }} mt={3}>
          <Box 
            sx={{ background: " #93A27C", width: "116px",height: "40px",borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Typography fontSize={16} fontWeight={600} fontFamily={"Montserrat Alternates"} color="white">FoodLand</Typography>
          </Box>
          <Box display="flex" flexDirection={{ xs: "column" }}>
            <Box mt={{ xs: 2, md: 0 }} >
              <Typography
                fontSize={{ xs: 16, md: 24 }}
                fontWeight={700}
                color="var(--primary)"
                mb={1}
              >
                Ваш путеводитель в области:
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={{ xs: 24, md: 35, lg: 45 }} width={{ xs: '100%', md: '80%', lg: '70%' }} fontWeight={800} >
                Сырья и ингредиентов для пищевой промышленности
              </Typography>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={{ xs: 1, lg: 9 }} mt={{ xs: "28px", md: 0 }}>
          {stats.map((stat, idx) => (
            <Grid key={idx} item xs={6} md={4}>
              <Typography mt={1} mb={2} fontSize={{ xs: 30, md: 48 }} fontWeight={{ xs: 600, md: 400 }}>
                <CountUp 
                  start={0} 
                  end={stat.value} 
                  duration={3} 
                  separator=" " 
                  suffix={stat.suffix || ""}
                />
              </Typography>
              <Typography fontSize={{ xs: 12, md: 16 }} color="#465659" fontWeight={400} maxWidth={257} className="sans">
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box mt={10}>
          <Carousel />
        </Box>
        <Grid2 container spacing={{ xs: 2, lg: 4 }} mt={6}>
          <Grid2 size={{ xs: 12, md: 6 }}>
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
          <Grid2 size={{ xs: 12, md: 6 }}>
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
                  <a href="tel:+996 0550 114 477">
                    <Typography fontSize={20} className="sans" fontWeight={400}>
                      +996 0550 114 477
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
                  <a href="https://go.2gis.com/m1271">
                    <Typography fontSize={20} className="sans" fontWeight={400}>
                      Г.Бишкек ул. Матросова 1а/21{" "}
                    </Typography>
                  </a>
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "25px",
                    height: "25px", 
                    borderRadius: "50%",
                    background: "#93A27C",
                    padding: "6px",
                  }}
                >
                  <img src={instagram} alt="Instagram" style={{ width: "20px", height: "20px" }} />
                </a>
                </Box>
              </Box>
            </Box>
          </Grid2>
          {md && (
            <Grid2 size={{ xs: 12, md: 6 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.951928123764!2d74.631668!3d42.863779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUxJzQ5LjYiTiA3NMKwMzcnNTQuMCJF!5e0!3m2!1sru!2skg!4v1728983722836!5m2!1sru!2skg"
                width="100%"
                height={!md ? "389px" : "100%"}
                style={{ border: "0", borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid2>
          )}
        </Grid2>
      </Container>
      {!md && (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.951928123764!2d74.631668!3d42.863779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUxJzQ5LjYiTiA3NMKwMzcnNTQuMCJF!5e0!3m2!1sru!2skg!4v1728983722836!5m2!1sru!2skg"
          width="100%"
          height={!md ? "389px" : "100%"}
          style={{ border: "0", borderRadius: "0", marginTop: 32 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </Box>
  );
};

export default AboutUs;
