import { Breadcrumbs, Container, Grid2, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfileData } from "../../redux/reducers/profile";
import Table from "./Table";
import MyProducts from "./MyProducts";
import Info from "./Info";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  const breadcrumbs = [
    <Link key="1" className="sans" to="/">
      Главная
    </Link>,
    <Typography className="sans" key="2">
      Мой профиль
    </Typography>,
    <Typography className="sans" key="3" sx={{ color: "text.primary" }}>
      Мои заказы
    </Typography>,
  ];

  return (
    <>
      <Container sx={{ pt: 6, pb: "52px" }} maxWidth="lg">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid2 container spacing={2} mt={2}>
          <Grid2 item size={3.1}>
            <Info />
          </Grid2>
          <Grid2 item size={8.9}>
            <Table />
          </Grid2>
        </Grid2>
        <MyProducts />
      </Container>
    </>
  );
};

export default Profile;
