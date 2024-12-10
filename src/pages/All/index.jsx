import {
  Breadcrumbs,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link, useLocation } from "react-router-dom";
import Categories from "./Categories";
import Products from "./Products";
import { useFormik } from "formik";
import Filter from "./Filter";
import { useAuth } from "../../shared/ProtectedRoutes";

const categories = [
  {
    title: "Шоколад и какао продукты",
    id: "670cfc0e8d01bf78e1ad9a6c",
  },
  { title: "Молочная продукция", id: "670cfc198d01bf78e1ad9b16" },
  { title: "Ингредиенты", id: "670cfc088d01bf78e1ad9a53" },
  { title: "Продукция для Бариста", id: "670cfc148d01bf78e1ad9ad0" },
  {
    title: "Покрытия и наполнители",
    id: "670cfc0a8d01bf78e1ad9a5c",
  },
  {
    title: "Пищевая печать",
    id: "670cfc1a8d01bf78e1ad9b25",
  },
];

const All = ({ setCart }) => {
  const location = useLocation();
  const isAuth = useAuth();
  const md = useMediaQuery("(min-width:900px)");

  const [chip, setChip] = useState("");
  const [category, setCategory] = useState("");
  const [params2, setParams2] = useState([]);
  const [params, setParams] = useState([]);
  const [searchValue, setValueSearch] = useState("");
  const [page, setPage] = useState(1);

  const formik = useFormik({
    initialValues: { category: "" },
  });

  useEffect(() => {
    if (location.search) {
      const category = categories.find(
        (item) => item.id === location?.search?.split("&")[1].split("=")[1]
      );
      setCategory(category);
    }
  }, []);

  const breadcrumbs = [
    <Link className="sans" key="1" to="/">
      Главная
    </Link>,
    <Typography className="sans" key="2" sx={{ color: "text.primary" }}>
      Каталог
    </Typography>,
    <Typography className="sans" key="2" sx={{ color: "text.primary" }}>
      Рекомендуемые товары
    </Typography>,
  ];
  return (
    <>
      <Container
        maxWidth="lg"
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
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Products
              category={category}
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
        setParams2={setParams2}
        params2={params2}
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

export default All;
