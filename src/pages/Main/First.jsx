import React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ButtonMore from "../../components/ButtonMore";
import partners from "../../assets/images/partners.webp";
import image1 from "../../assets/images/1.webp";
import image2 from "../../assets/images/2.webp";
import image3 from "../../assets/images/3.webp";
import image4 from "../../assets/images/4.webp";
import "swiper/css";

// SwiperCore.use([Navigation]);

const First = () => {
  return (
    <Box component="section" p="138px 0 72px" backgroundColor="#f4f4f4">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight="bold"
          lineHeight="110%"
          textAlign="center"
          variant="h1"
        >
          Ваш надежный поставщик сладкого и не только
        </Typography>
        <Box mt={6}>
          <TextField placeholder="Найти..." sx={{ mr: "34.5px", width: 318 }} />
          <ButtonMore sx={{ width: 193 }} txt="Заказать звонок"></ButtonMore>
        </Box>
        <Box mt={5} display="flex" alignItems="center" columnGap={3}>
          <img src={partners} width="152px" height="40px" alt="Партнеры" />
          <Typography variant="subtitle2" color="#737373" fontWeight="regular">
            +50 компаний
          </Typography>
        </Box>
      </Container>
      <Box
        position="relative"
        sx={{
          "& img": {
            height: "280px",
            objectFit: "cover",
            width: "100%",
            borderRadius: "15px",
          },
          "& .swiper-slide": {
            minWidth: "428px",
          },
        }}
        mt={7}
      >
        <Swiper
          freeMode={true}
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={30}
          navigation={true}
        >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default First;
