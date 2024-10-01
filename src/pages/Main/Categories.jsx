import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/images/category-1.webp";
import img2 from "../../assets/images/category-2.webp";
import img3 from "../../assets/images/category-3.webp";
import img4 from "../../assets/images/category-4.webp";
import ButtonMore from "../../components/ButtonMore";

const Categories = () => {
  return (
    <Box component="section" backgroundColor="#FAF5F1" p="72px 0 152px">
      <Container maxWidth="lg">
        <Typography
          color="#493829"
          variant="h2"
          fontWeight="bold"
          lineHeight="120%"
          maxWidth={681}
          mb={5}
        >
          Просмотр товаров по{" "}
          <span style={{ color: "#B89776" }}>категориям</span>
        </Typography>
        <Grid
          container
          spacing={5}
          sx={{
            "& img": {
              borderRadius: "16px",
            },
            "& .category__card": {
              borderRadius: "16px",
              overflow: "hidden",
            },
            "& .more": {
              position: "absolute",
              bottom: 20,
              right: 20,
              color: "#FFF",
            },
          }}
        >
          <Grid item xs={3}>
            <Box className="category__card" position="relative">
              <Box className="more">
                <Typography
                  variant="h5"
                  mb={2.5}
                  maxWidth={219}
                  fontWeight="bold"
                >
                  Шоколадная продукция
                </Typography>
                <ButtonMore txt="Подробнее " />
              </Box>
              <img src={img4} width="100%" alt="Шоколадная продукция" />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="category__card" position="relative">
              <Box className="more">
                <Typography
                  variant="h5"
                  mb={2.5}
                  maxWidth={219}
                  fontWeight="bold"
                >
                  Ореховая продукция
                </Typography>
                <ButtonMore txt="Подробнее " />
              </Box>
              <img src={img} width="100%" alt="Шоколадная продукция" />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="category__card" position="relative">
              <Box className="more">
                <Typography
                  variant="h5"
                  mb={2.5}
                  maxWidth={219}
                  fontWeight="bold"
                >
                  Молочная продукция
                </Typography>
                <ButtonMore txt="Подробнее " />
              </Box>
              <img src={img2} width="100%" alt="Шоколадная продукция" />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="category__card" position="relative">
              <Box className="more">
                <Typography
                  variant="h5"
                  mb={2.5}
                  maxWidth={219}
                  fontWeight="bold"
                >
                  Декоративные изделия
                </Typography>
                <ButtonMore txt="Подробнее " />
              </Box>
              <img src={img3} width="100%" alt="Шоколадная продукция" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
