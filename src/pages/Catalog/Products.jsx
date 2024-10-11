import {
  Box,
  Chip,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Find from "../../assets/images/Find";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getProducts, setSearch } from "../../redux/reducers/products";
import PaginationLarge from "../../components/Pagination";
import filter from "../../assets/images/filter.svg";
import empty from "../../assets/images/emptyCart.svg";
import { handleFilter } from "../../redux/reducers/mainSlice";

const Products = ({ chip, setChip, formik }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const md = useMediaQuery("(min-width:900px)");

  const products = useSelector((state) => state.products.products);
  const search = useSelector((state) => state.products.search);

  const [searchValue, setValueSearch] = useState("");
  const [page, setPage] = useState(1);
  const [names, setNames] = useState(1);

  const handleDelete = () => {
    setChip(null);
    formik.setFieldValue("category", null);
    dispatch(getProducts("/products"));
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setNames(products?.results?.map((item) => item.name));
    if (location.search) {
      setValueSearch(search);
      if (!location.search.includes("category"))
        dispatch(setSearch(decodeURI(location.search.split("=")[1])));
      dispatch(
        getProducts(
          `https://api.foodland.kg/v1/products?limit=10&page=1&${
            location.search.split("?")[1]
          }`
        )
      );
    }
  }, []);

  useEffect(() => {
    setPage(1);
  }, [formik.values.category]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      getProducts(
        `products?limit=12${
          formik.values.category ? `&category=${formik.values.category}` : ""
        }&page=${page}`
      )
    );
  }, [page]);

  return (
    <Box component="section">
      <Box
        display="flex"
        mb={2}
        alignItems={{ xs: "start", md: "center" }}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h4" fontWeight={700}>
            {search ? search : "Каталог"}
          </Typography>
          {!md && (
            <IconButton onClick={() => dispatch(handleFilter(true))}>
              <img src={filter} alt="" />
            </IconButton>
          )}
        </Box>
        {!md && (
          <Box display="flex" columnGap={1}>
            {chip && (
              <Chip
                sx={{
                  "& .MuiChip-label": {
                    fontFamily: "Open Sans",
                    color: "#959595",
                  },
                }}
                label={chip}
                variant="outlined"
                onDelete={handleDelete}
              />
            )}
          </Box>
        )}
        <TextField
          placeholder="Найти на Foodland..."
          value={searchValue}
          onChange={(e) => {
            setValueSearch(e.target.value);
            dispatch(
              getProducts(
                `https://api.foodland.kg/v1/products?limit=10&page=1&search=${e.target.value}`
              )
            );
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Find />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            width: { xs: "100%", md: 318 },
            mt: { xs: 2, md: 0 },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2",
            },
            "& input": {
              p: "14.66px 18px 14.66px 0!important",
            },
          }}
        />
      </Box>
      {md && (
        <Box display="flex" mb={2.6} columnGap={1}>
          {chip && (
            <Chip
              sx={{
                "& .MuiChip-label": {
                  fontFamily: "Open Sans",
                  color: "#959595",
                },
              }}
              label={chip}
              variant="outlined"
              onDelete={handleDelete}
            />
          )}
        </Box>
      )}
      {!products?.results?.length ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap={4}
        >
          <img src={empty} alt="" />
          <Typography variant="subtitle1" fontWeight={600} color="#AEAEAE">
            По вашему запросу{" "}
            <span style={{ color: "#000" }}>{searchValue} </span>
            ничего не найдено
          </Typography>
        </Box>
      ) : (
        <Grid2 container spacing={2}>
          {Array.isArray(products?.results) &&
            products?.results?.map((item, idx) => (
              <Grid2
                item
                size={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 4 }}
                key={idx}
              >
                <Card item={item} />
              </Grid2>
            ))}
        </Grid2>
      )}

      <PaginationLarge
        page={page}
        handleChange={handleChange}
        products={products}
      />
    </Box>
  );
};

export default Products;
