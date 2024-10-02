import React from "react";
import img1 from "../../assets/images/partner.webp";
import img2 from "../../assets/images/partner2.webp";
import img3 from "../../assets/images/partner3.webp";
import img4 from "../../assets/images/partner4.webp";
import img5 from "../../assets/images/partner5.webp";
import img6 from "../../assets/images/partner6.webp";
import img7 from "../../assets/images/partner7.webp";
import { Box, Grid2, Typography } from "@mui/material";

const Partners = () => {
  return (
    <Box component="section" backgroundColor="#FFF" p="65px 0 85px">
      <Typography variant="h2" textAlign="center" fontWeight="bold" mb={6}>
        Официальные дистрибьюторы
      </Typography>
      <Grid2 container>
        <Grid2 item size={1.7}>
          <img src={img1} alt="" />
        </Grid2>
        <Grid2 item size={1.7}>
          <img src={img2} alt="" />
        </Grid2>
        <Grid2 item size={1.7}>
          <img src={img3} alt="" />
        </Grid2>
        <Grid2 item size={1.7}>
          <img src={img4} alt="" />
        </Grid2>
        <Grid2 item size={1.7}>
          <img src={img5} alt="" />
        </Grid2>
        <Grid2 item size={1.7}>
          <img src={img6} alt="" />
        </Grid2>
        <Grid2 item size={1.7}>
          <img src={img7} alt="" />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Partners;
