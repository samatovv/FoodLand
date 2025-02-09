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
                transition: "all 300ms ease",
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
          <Box position="relative" mt={7}
              >
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              freeMode={true}
              loop={true}
              speed={1700}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },

                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
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
                        background: "#EDEDED",
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
                      fontSize={{ xs: 13, md: 20 }}
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
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurClients;
