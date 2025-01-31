import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getRecomendations } from "../../redux/reducers/products";
import PaginationLarge from "../../components/Pagination";

const Recomendations = ({ setCart, details, id, setPage, page }) => {
  const dispatch = useDispatch();

  const recomendations = useSelector((state) => state.products.recomendations);
  const [allRecommendations, setAllRecommendations] = useState([]);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    setAllRecommendations([]);
    setIsFallback(false);
  }, [details, page]);

  useEffect(() => {
    if (details?.id) {
      dispatch(
        getRecomendations(
          `products?category=${details?.category?.id}&page=${page}`
        )
      );
    }
  }, [id, page, details, dispatch]);

  useEffect(() => {
    if (recomendations?.results) {
      setAllRecommendations((prev) => {
        const newItems = recomendations.results.filter(
          (item) => !prev.some((existing) => existing.id === item.id)
        );
        if(recomendations.results.length < 5) setIsFallback(true);
        return [...prev, ...newItems];
      });
    }
  }, [recomendations]);
  // console.log(recomendations.results.length)
  console.log(isFallback)

  useEffect(() => {
    if (isFallback === true) {
      dispatch(getRecomendations(`products?page=${page}`));
    }
  }, [allRecommendations.length, isFallback, dispatch, page]);


  return (
    <Box component="section" mt={6}>
      {allRecommendations.length > 0 && (
        <Typography fontSize={{ xs: 26, md: 20 }} mt={4} fontWeight={600}>
          Вам могут понравиться{" "}
        </Typography>
      )}
      <Grid container spacing={1.2} mt={2}>
        {allRecommendations.slice(0, 5).map((item, idx) => (
          <Grid key={idx} item xs={6} sm={4} md={3} lg={2.4} xl={2.4}>
            <Card setCart={setCart} item={item} />
          </Grid>
        ))}
      </Grid>
      {allRecommendations.length > 0 && (
        <PaginationLarge
          page={page}
          handleChange={(event, value) => setPage(value)}
          products={recomendations}
        />
      )}
    </Box>
  );
};

export default Recomendations;
