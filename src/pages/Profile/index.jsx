import { Breadcrumbs, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import Table from "./Table";
import MyProducts from "./MyProducts";
import Info from "./Info";

const Profile = ({ setCart }) => {
  const breadcrumbs = [
    <Link key="1" to="/">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans">
        Главная
      </Typography>
    </Link>,
    <Typography fontSize={{ xs: 14, md: 13 }} className="sans" key="2">
      Мой профиль
    </Typography>,
    <Typography
      fontSize={{ xs: 14, md: 13 }}
      className="sans"
      key="3"
      sx={{ color: "text.primary" }}
    >
      Мои заказы
    </Typography>,
  ];

  return (
    <>
      <Container sx={{ pt: { xs: 5, md: 6 }, pb: "52px" }} maxWidth="lg">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid2 container spacing={2} mt={{ xs: 0, md: 2 }}>
          <Grid2 size={{ xs: 12, md: 3.1 }}>
            <Info />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8.9 }}>
            <Table />
          </Grid2>
        </Grid2>
        <MyProducts setCart={setCart} />
      </Container>
    </>
  );
};

export default Profile;
