import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getRecomendations } from "../../redux/reducers/products";
import PaginationLarge from "../../components/Pagination";

const Recomendations = ({ setCart, details, id, setPage, page }) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:768px)");

  const recomendations = useSelector((state) => state.products.recomendations);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // useEffect(() => {
  //   if (details??.id)
  //     dispatch(
  //       getProducts(
  //         `https://api.foodland.kg/v1/products?limit=4&page=1&category=${details?.category}`
  //       )
  //     );
  // }, [details]);

  useEffect(() => {
    if (details?.id)
      dispatch(
        getRecomendations(
          `products?limit=${md ? 6 : 7}&category=${
            details?.category?.id
          }&page=${page}`
        )
      );
  }, [id, page, details]);

  return (
    <Box component="section" mt={6}>
      {recomendations?.results?.filter((item) => item.id !== id)?.length ? (
        <Typography fontSize={{ xs: 26, md: 20 }} mt={4} fontWeight={600}>
          Вам могут понравиться{" "}
        </Typography>
      ) : (
        ""
      )}
      <Grid2 container spacing={1.2} mt={2}>
        {Array.isArray(recomendations?.results) &&
          recomendations?.results
            .filter((item) => item.id !== id)
            .map((item, idx) => (
              <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2.4, xl: 2.4 }}>
                <Card setCart={setCart} item={item} />
              </Grid2>
            ))}
      </Grid2>
      {recomendations?.results?.filter((item) => item.id !== id)?.length ? (
        <PaginationLarge
          page={page}
          handleChange={handleChange}
          products={recomendations}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default Recomendations;
