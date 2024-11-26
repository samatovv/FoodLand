import { Box, Skeleton, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../redux/reducers/mainSlice";
import emptyImg from "../assets/images/emptyCart.svg";

const Carousel = () => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:769px)");

  const banners = useSelector((state) => state.main.banners);

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
        "& .swiper-slide": {
          minWidth: { xs: "100%", md: "428px" },
        },
      }}
      mt={7}
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        freeMode={true}
        watchSlidesProgress={true}
        // loop={true}
        centeredSlides={false}
        initialSlide={md ? 2 : 1}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },

          768: {
            slidesPerView: 2,
            // slidesPerGroup: 2,
            spaceBetween: 30,
          },
        }}
      >
        {banners?.results?.map((item, idx) => (
          <>
            <SwiperSlide key={idx}>
              <Box
                component="img"
                width={{ xs: "100%", md: 428, lg: 428 }}
                height={280}
                sx={{ objectFit: "cover!important" }}
                src={item.imageUrl ? item.imageUrl : emptyImg}
                alt=""
              />
            </SwiperSlide>{" "}
            <SwiperSlide key={idx}>
              <Box
                component="img"
                width={{ xs: "100%", md: 428, lg: 428 }}
                height={280}
                sx={{ objectFit: "cover!important" }}
                src={item.imageUrl ? item.imageUrl : emptyImg}
                alt=""
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
