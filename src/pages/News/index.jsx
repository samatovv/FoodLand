import { Container, Typography } from "@mui/material";
import React from "react";

const News = () => {
  return (
    <Container sx={{ minHeight: "27vh" }}>
      <Typography variant="h2" mt={5}>
        Новости
      </Typography>
    </Container>
  );
};

export default News;
