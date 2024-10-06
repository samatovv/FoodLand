import {
  Box,
  Chip,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Find from "../../assets/images/Find";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getProducts, setSearch } from "../../redux/reducers/products";
import PaginationLarge from "../../components/Pagination";

const Products = ({ chip, setChip, formik }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const products = useSelector((state) => state.products.products);
  const search = useSelector((state) => state.products.search);

  const [searchValue, setValueSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleDelete = () => {
    setChip(null);
    formik.setFieldValue("category", null);
    dispatch(getProducts("/products"));
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (location.search) {
      setValueSearch(search);
      if (!location.search.includes("category"))
        dispatch(setSearch(decodeURI(location.search.split("=")[1])));
      dispatch(
        getProducts(
          `https://foodlandtest.com/v1/products?limit=10&page=1&${
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
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4" fontWeight={700}>
          {search ? search : "Каталог"}
        </Typography>
        <TextField
          placeholder="Найти на Foodland..."
          value={searchValue}
          onChange={(e) => {
            setValueSearch(e.target.value);
            dispatch(
              getProducts(
                `https://foodlandtest.com/v1/products?limit=10&page=1&search=${e.target.value}`
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
            width: 318,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2",
            },
            "& input": {
              p: "14.66px 18px 14.66px 0!important",
            },
          }}
        />
      </Box>
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
      <Grid2 container spacing={2}>
        {Array.isArray(products?.results) &&
          products?.results?.map((item, idx) => (
            <Grid2 item size={3} key={idx}>
              <Card item={item} />
            </Grid2>
          ))}
      </Grid2>

      <PaginationLarge
        page={page}
        handleChange={handleChange}
        products={products}
      />
    </Box>
  );
};

export default Products;
