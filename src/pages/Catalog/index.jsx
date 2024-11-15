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

const Catalog = ({ setCart }) => {
  const dispatch = useDispatch();
  const isAuth = useAuth();
  const md = useMediaQuery("(min-width:900px)");

  const [chip, setChip] = useState("");
  const [params, setParams] = useState([]);
  const [searchValue, setValueSearch] = useState("");
  const [page, setPage] = useState(1);

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
        maxWidth="xl"
        sx={{
          mt: 4.3,
          mb: 4,
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
              <Categories
                searchValue={searchValue}
                setValueSearch={setValueSearch}
                setParams={setParams}
                params={params}
                isAuth={isAuth}
                chip={chip}
                formik={formik}
                setChip={setChip}
                page={page}
                setPage={setPage}
              />
            </Grid2>
          )}
          <Grid2 item size={{ xs: 12, md: 9 }}>
            <Products
            setCart={setCart}
              page={page}
              setPage={setPage}
              searchValue={searchValue}
              setValueSearch={setValueSearch}
              setParams={setParams}
              params={params}
              formik={formik}
              setChip={setChip}
              chip={chip}
            />
          </Grid2>
        </Grid2>
      </Container>
      <Filter
        setPage={setPage}
        searchValue={searchValue}
        setValueSearch={setValueSearch}
        setParams={setParams}
        params={params}
        isAuth={isAuth}
        chip={chip}
        formik={formik}
        setChip={setChip}
        page={page}
      />
    </>
  );
};

export default Catalog;
