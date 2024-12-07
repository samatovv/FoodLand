import { Box, Container, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/clients/supara.webp";
import img2 from "../../assets/clients/podarimne.webp";
import img3 from "../../assets/clients/kaynar.webp";
import img4 from "../../assets/clients/wasabi.webp";
import img5 from "../../assets/clients/shirin.webp";
import img6 from "../../assets/clients/marka.webp";
import img7 from "../../assets/clients/sova.webp";
import img8 from "../../assets/clients/bublik.webp";
import img9 from "../../assets/clients/macaronnaya.webp";
import img10 from "../../assets/clients/konti.webp";
// import instagram from "../../assets/images/instagram.svg";
// import facebook from "../../assets/images/facebook.svg";
// import twitter from "../../assets/images/twitter.svg";
// import ArrowForwardIcon from "../../components/ArrowForwardIcon";
// import ArrowBackIcon from "../../components/ArrowBackIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const clients = [
  { img: img1, name: "Supara Talkan" },
  { img: img2, name: "Podarimne.kg" },
  { img: img3, name: "Kaynar groop" },
  { img: img4, name: "Wasabi" },
  { img: img5, name: "Ширин" },
  { img: img6, name: "Наша марка" },
  { img: img7, name: "SOVA" },
  { img: img8, name: "Бублик" },
  { img: img9, name: "Макаронная лавка" },
  { img: img10, name: "Konti Pastry" },
];

const OurClients = () => {
  return (
    <Box component="section" backgroundColor="#FFF" p="62px 0">
      <Container>
        <Box
          sx={{
            "& .clients__card ": {
              "& img": {
                filter: { xs: "none", md: "grayscale(1)" },
                transition: "all 800ms ease",
              },
              "&:hover img": {
                filter: "none",
              },
            },
          }}
        >
          <Typography variant="h2" textAlign="center" fontWeight="700" mb={5}>
            Нам доверяют
          </Typography>
          <Box position="relative" mt={7}>
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // centeredSlides={true}
              // initialSlide={4}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 16,
                },

                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {clients.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Box
                    className="clients__card"
                    p={{ xs: "12px", md: "24px" }}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    borderRadius="24px"
                    border="1px solid #E6E6E6"
                    sx={{
                      transition: "box-shadow 0.3s ease",
                      border: "1px solid #E6E6E6",
                      "&:hover": {
                        borderColor: "transparent",
                        boxShadow: "0px 0px 4px 4px #00000010",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      width={{ xs: 90, md: 180 }}
                      height={{ xs: 90, md: 180 }}
                      src={item.img}
                      alt=""
                    />
                    <Typography
                      mt={3}
                      mb={1.7}
                      textAlign="center"
                      variant="h5"
                      fontWeight="700"
                      sx={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                      }}
                    >
                      {item.name}
                    </Typography>
                    {/* <Typography
                  variant="subtitle1"
                  lineHeight="140%"
                  textAlign="center"
                  color="#666"
                  mb={3}
                >
                  Объявление о запуске новых вкусов шоколада или какао-порошка
                </Typography>
                <Box display="flex" alignItems="center" columnGap="12px">
                  <a href="https://instagram.com">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="https://facebook.com">
                    <img src={facebook} alt="" />
                  </a>
                  <a href="https://twiiter.com">
                    <img src={twitter} alt="" />
                  </a>
                </Box> */}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          {/* <Box
          className="roulette"
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            columnGap: 3,
            "& img": {
              filter: { xs: "none", md: "grayscale(1)" },
              transition: "all 800ms ease",
              width: { xs: 120, sm: 210 },
              "&:hover": {
                filter: "none",
              },
            },
          }}
        >
          {clients.map((item, idx) => (
            <img src={item.img} key={idx} alt="" />
          ))}
        </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default OurClients;
