import {
  Box,
  Breadcrumbs,
  Card,
  Container,
  Grid2,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Products from "./Products";
import Recomendations from "../Details/Recomendations";
import { useFormik } from "formik";

const Catalog = () => {
  const breadcrumbs = [
    <Link className="sans" key="1" to="/">
      Главная
    </Link>,
    <Typography className="sans" key="2" sx={{ color: "text.primary" }}>
      Каталог
    </Typography>,
  ];

  const formik = useFormik({
    initialValues: { category: "" },
  });
  const [chip, setChip] = useState("");
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
            <Categories formik={formik} setChip={setChip} />
          </Grid2>
          <Grid2 item size={9}>
            <Products formik={formik} setChip={setChip} chip={chip} />
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default Catalog;
