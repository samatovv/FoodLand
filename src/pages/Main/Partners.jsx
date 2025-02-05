import React from "react";
import img1 from "../../assets/images/partner.webp";
import img2 from "../../assets/images/partner2.webp";
import img3 from "../../assets/images/partner3.webp";
import img4 from "../../assets/images/partner4.webp";
import img5 from "../../assets/images/partner5.webp";
import img6 from "../../assets/images/partner6.webp";
import img7 from "../../assets/images/partner7.webp";
import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";

const arr = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

const Partners = () => {
  const md = useMediaQuery("(min-width:768px)");
  return (
    <Box
      component="section"
      backgroundColor="#FFF"
      p={{ xs: "40px 0", md: "65px 0 85px" }}
    >
      <Container>
        <Typography
          variant="h2"
          textAlign={{ xs: "start", md: "center" }}
          fontWeight="bold"
          mb={{ xs: 4, md: 6 }}
        >
          Официальные дистрибьюторы
        </Typography>
      </Container>
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
        {arr.map((item, idx) => (
          <img src={item} key={idx} alt="" />
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
