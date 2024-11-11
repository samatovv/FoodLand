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
// import ArrowForwardIcon from "../../components/ArrowForwardIcon";
// import ArrowBackIcon from "../../components/ArrowBackIcon";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

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
        <Box
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
        </Box>
      </Box>
    </Box>
  );
};

export default OurClients;
