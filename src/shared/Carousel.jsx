import { Box, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../redux/reducers/mainSlice";

const Carousel = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.main.banners);

  useEffect(() => dispatch(getBanners()), []);

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
        "& .swiper-slide": {
          minWidth: "428px",
        },
      }}
      mt={7}
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        freeMode={true}
        loop={true}
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={30}
        initialSlide={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
          },

          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16,
          },
        }}
      >
        {Array.isArray(banners?.results)
          ? banners?.results?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <img width={428} height={280} src={item.imageUrl} alt="" />
              </SwiperSlide>
            ))
          : Array.from(Array(10).keys()).map((item, idx) => (
              <SwiperSlide
                key={idx}
                style={{
                  height: 280,
                }}
              >
                <Skeleton variant="rect" width={428} height="100%" />
              </SwiperSlide>
            ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
