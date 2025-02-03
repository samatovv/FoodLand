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
import {
  getProducts,
  setProducts,
} from "../../redux/reducers/products";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, handleLoading } from "../../redux/reducers/mainSlice";

const mainCategories = [
  {
    title: "Шоколад и какао продукты",
    id: "670cfc0e8d01bf78e1ad9a6c",
  },
  { title: "Молочная продукция", id: "670cfc198d01bf78e1ad9b16" },
  { title: "Ингредиенты", id: "670cfc088d01bf78e1ad9a53" },
  { title: "Продукция для бариста", id: "670cfc148d01bf78e1ad9ad0" },
  {
    title: "Покрытия и наполнители",
    id: "670cfc0a8d01bf78e1ad9a5c",
  },
  {
    title: "Пищевая печать",
    id: "670cfc1a8d01bf78e1ad9b25",
  },
];

const Catalog = ({ setCart }) => {
  const isAuth = useAuth();
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:900px)");
  const location = useLocation();

  const [chip, setChip] = useState("");
  const [category, setCategory] = useState("");
  const [params2, setParams2] = useState([]);
  const [params, setParams] = useState([]);
  const [searchValue, setValueSearch] = useState("");
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState({ first: [], second: [] });

  const allCategories = useSelector((state) => state.main.categories);

  useEffect(() => {
    if (allCategories) {
      setCategories(allCategories);
    }
  }, [allCategories]);

  useEffect(() => {
    if (!categories || !categories.first || !categories.second) return;
    if (!location.search) return;
  
    const queryParams = new URLSearchParams(location.search);
    const queryId = queryParams.get("categoryIds"); 
    // console.log("Extracted queryId:", queryId);
  
    if (queryId) {
      const foundCategory =
        categories.first.find((item) => item.id === queryId) ||
        categories.second.find((item) => item.id === queryId);
  
      if (foundCategory) {
        setCategory(foundCategory.name);
        // console.log("Found category:", foundCategory.name);
      } else {
        // console.log("Category not found for ID:", queryId);
      }
    }
  }, [categories, location.search]);


  useEffect(() => {
    if (!allCategories.length) dispatch(getCategories());
  }, [allCategories.length, dispatch]);

  useEffect(() => {
    const categories = allCategories
      ?.filter((item) => !item?.parent?.name)
      .map((el) => ({
        first: allCategories
          .map((item) => item.parent?.name === el.parent?.name && item)
          .filter((item) => item),
        second: allCategories.filter((item) => item.parent).map((item) => item),
      }));
    setCategories(categories[0]);
  }, [allCategories]);

  const formik = useFormik({
    initialValues: { category: "" },
  });

  const handleProducts2 = (item) => {
      dispatch(handleLoading(true));
      dispatch(setProducts([]));
        setParams2({ id: item?.id, name: item.name, parent: item.parent.id });
        if (page > 1) setPage(1);
        dispatch(
          getProducts(
            `/products/query?limit=12&page=${page}&search=&categoryIds=${item?.id}`
          )
        );
    };

  const breadcrumbs = [
    <Link className="sans" key="1" to="/">
      Главная
    </Link>,
    <Typography
      onClick={() => {
        dispatch(handleLoading(true));
        dispatch(setProducts([]));
        setCategory({ title: "" });
        dispatch(
          getProducts(`/products/query?limit=12&page=1&search=&categoryIds=`)
        );
      }}
      className="sans"
      key="2"
      sx={{ color: "text.primary", cursor: "pointer" }}
    >
      Каталог
    </Typography>,
    category?.title && (
      <Typography
       className="sans" key="2" sx={{ color: "text.primary", cursor: category?.title3 ? "pointer" : "default" }}
       onClick={() => {
        dispatch(handleLoading(true));
        dispatch(setProducts([]));
        setCategory({ title: category?.title, title2: "", title3: "", title4: "" });
        dispatch(
          getProducts(`/products/query?limit=12&page=1&search=&categoryIds=${mainCategories.find((item) => item.title === category?.title).id}`)
        );
       }}
       >
        {category?.title}
      </Typography>
    ),
    category?.title3 && (
      <Typography className="sans" key="3" sx={{ color: "text.primary", cursor: category?.title3 ? "pointer" : "default" }}
      onClick={() => {
        const foundCategory = categories?.second.find(
          (item) => item.name === category?.title3
        );
      
        if (foundCategory) {
          dispatch(handleLoading(true));
          dispatch(setProducts([]));
          setCategory({ ...category, title3: foundCategory.name, title2: "" , title4: "" });
          handleProducts2(foundCategory);
        }
      }}
      >
        {category?.title3}
      </Typography>
    ),
    category?.title4 && (
      <Typography className="sans" key="4" sx={{ color: "text.primary"}}
      >
        {category?.title4}
      </Typography>
    ),
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
        {/* breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid2 container mt={{ xs: "35px", md: 2 }} spacing={6}>
          {md && (
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Categories
                category={category}
                searchValue={searchValue}
                setValueSearch={setValueSearch}
                setParams={setParams}
                params={params}
                setCategory={setCategory}
                setParams2={setParams2}
                params2={params2}
                isAuth={isAuth}
                chip={chip}
                formik={formik}
                setChip={setChip}
                page={page}
                setPage={setPage}
              />
            </Grid2>
          )}
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Products
              category={category}
              setCart={setCart}
              page={page}
              setCategory={setCategory}
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
        setCategory={setCategory}
        category={category}
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

export default Catalog;