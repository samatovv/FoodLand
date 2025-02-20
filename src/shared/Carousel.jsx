import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../redux/reducers/mainSlice";
import emptyImg from "../assets/images/empty.svg";
import arrowIcon from "../assets/images/arrow.webp";

const Carousel = () => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:768px)");

  const banners = useSelector((state) => state.main.banners);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(getBanners(`/banners?type=secondary`)), []);

  return (
    <Box
      position="relative"
      sx={{
        "& img": {
          height: "280px",
          objectFit: "cover",
          width: "100%",
          borderRadius: "15px",
        },
        "& .swiper-wrapper": {
          
          display: "flex",
          justifyContent: { xs: "start", md: "center" },
        },
        "& .swiper-slide": {
          minWidth: { xs: "100%", md: "428px" },
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          width: "30px",
          height: "10px",
          position: "absolute",
          top: "-40px",
          right: "44%",
          zIndex: 1,
          cursor: "pointer",
        },
        "& .swiper-button-next::before, & .swiper-button-prev::before": {
          content: '""',
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          background: `no-repeat url(${arrowIcon}) center/cover`,
        },
        "& .swiper-button-next": {
          transform: "rotate(180deg)",
        },
        "& .swiper-button-prev": {
          right: "56%",
        },
      }}
      mt={7}
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        initialSlide={md ? 1 : 0}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {[...Array(30)].flatMap(() => banners?.results || []).map((item, idx) => (
          <SwiperSlide key={idx}>
            <Box
              component="img"
              sx={{ objectFit: "cover!important" }}
              src={item.imageUrl ? item.imageUrl : emptyImg}
              alt="photo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
