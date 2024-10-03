import React, { useEffect, useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ButtonMore from "../../components/ButtonMore";
import partners from "../../assets/images/partners.webp";
import image1 from "../../assets/images/1.webp";
import image2 from "../../assets/images/2.webp";
import image3 from "../../assets/images/3.webp";
import image4 from "../../assets/images/4.webp";
import "swiper/css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/reducers/products";
import { getBanners } from "../../redux/reducers/mainSlice";

const First = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const banners = useSelector((state) => state.main.banners);

  useEffect(() => dispatch(getBanners()), []);

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
          <form
            style={{ display: "inline" }}
            action=""
            onSubmit={() => {
              navigate(`/catalog/?search=${value}`);
            }}
          >
            <TextField
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                dispatch(setSearch(e.target.value));
              }}
              placeholder="Найти..."
              sx={{ mr: "34.5px", width: 318 }}
            />
          </form>
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
          navigation={true}
          modules={[Navigation]}
          // freeMode={true}
          loop={true}
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={30}
          initialSlide={2}
        >
          {Array.isArray(banners?.results) &&
            banners?.results?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <img width={428} height={280} src={item.imageUrl} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default First;
