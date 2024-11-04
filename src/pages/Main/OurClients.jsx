import {
  Box,
  Container,
  Grid2,
  Pagination,
  PaginationItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import img1 from "../../assets/clients/supara.png";
import img2 from "../../assets/clients/podarimne.png";
import img3 from "../../assets/clients/kaynar.png";
import img4 from "../../assets/clients/wasabi.png";
import img5 from "../../assets/clients/shirin.png";
import img6 from "../../assets/clients/marka.png";
import img7 from "../../assets/clients/sova.png";
import img8 from "../../assets/clients/bublik.png";
import img9 from "../../assets/clients/macaronnaya.png";
import img10 from "../../assets/clients/konti.png";
// import instagram from "../../assets/images/instagram.svg";
// import facebook from "../../assets/images/facebook.svg";
// import twitter from "../../assets/images/twitter.svg";
import ArrowForwardIcon from "../../components/ArrowForwardIcon";
import ArrowBackIcon from "../../components/ArrowBackIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
  const md = useMediaQuery("(min-width:768px)");
  return (
    <Box component="section" backgroundColor="#FFF" p="62px 0">
      <Container
        maxWidth="lg"
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
        <Typography variant="h2" fontWeight="700" mb={5}>
          Наши клиенты
        </Typography>
        <Box position="relative" mt={7}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            // freeMode={true}
            // loop={true}
            centeredSlides={false}
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
            {clients.map((item) => (
              <SwiperSlide>
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
        {/* <Grid2
          container
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
          spacing={2.5}
        >
          {clients.map((item) => (
            <Grid2 size={{ xs: 6, md: 3 }}>
              <Box
                className="clients__card"
                p="24px"
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
                <Typography
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
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2> */}
      </Container>
    </Box>
  );
};

export default OurClients;
