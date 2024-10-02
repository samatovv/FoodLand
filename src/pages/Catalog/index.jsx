import { Breadcrumbs, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Products from "./Products";

const Catalog = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Главная
    </Link>,
    <Typography key="2" sx={{ color: "text.primary" }}>
      Каталог
    </Typography>,
  ];
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: 4.3,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid2 container mt={2} spacing={6}> 
          <Grid2 item size={3}>
            <Categories />
          </Grid2>
          <Grid2 item size={9}>
            <Products />
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default Catalog;
