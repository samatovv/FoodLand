import {
  Breadcrumbs,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Products from "./Products";
import { useFormik } from "formik";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { handleAuthDialog } from "../../redux/reducers/mainSlice";
import { useAuth } from "../../shared/ProtectedRoutes";

const Catalog = () => {
  const dispatch = useDispatch();
  const isAuth = useAuth();
  const md = useMediaQuery("(min-width:900px)");

  const [chip, setChip] = useState("");

  const formik = useFormik({
    initialValues: { category: "" },
  });

  const breadcrumbs = [
    <Link className="sans" key="1" to="/">
      Главная
    </Link>,
    <Typography className="sans" key="2" sx={{ color: "text.primary" }}>
      Каталог
    </Typography>,
  ];

  useEffect(() => {
    if (!isAuth) dispatch(handleAuthDialog(true));
  }, []);

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
        <Grid2 container mt={{ xs: "35px", md: 2 }} spacing={6}>
          {md && (
            <Grid2 item size={{ xs: 12, md: 3 }}>
              <Categories isAuth={isAuth} formik={formik} setChip={setChip} />
            </Grid2>
          )}
          <Grid2 item size={{ xs: 12, md: 9 }}>
            <Products formik={formik} setChip={setChip} chip={chip} />
          </Grid2>
        </Grid2>
      </Container>
      <Filter formik={formik} setChip={setChip} />
    </>
  );
};

export default Catalog;
