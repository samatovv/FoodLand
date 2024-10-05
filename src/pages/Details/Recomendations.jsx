import { Box, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/products";
import PaginationLarge from "../../components/Pagination";

const Recomendations = ({ details, id, setPage, page }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // useEffect(() => {
  //   if (details?.id)
  //     dispatch(
  //       getProducts(
  //         `https://foodlandtest.com/v1/products?limit=4&page=1&category=${details?.category}`
  //       )
  //     );
  // }, [details]);

  useEffect(() => {
    if (details?.id)
      dispatch(
        getProducts(
          `products?limit=5&category=${details?.category}&page=${page}`
        )
      );
  }, [id, page, details]);

  return (
    <Box component="section" mt={6}>
      <Typography variant="h5" mt={4} fontWeight={600}>
        Вам могут понравиться{" "}
      </Typography>
      <Grid2 container>
        {Array.isArray(products?.results) &&
          products?.results
            ?.filter((item) => item.id !== id)
            .map((item, idx) => (
              <Grid2 item size={2.4}>
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

export default Recomendations;
