import { Container, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Container sx={{ minHeight: "27vh" }}>
        <Typography variant="h2" mt={5}>
          О нас
        </Typography>
      </Container>
    </>
  );
};

export default AboutUs;
