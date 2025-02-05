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
  const [extraQueryDone, setExtraQueryDone] = useState(false);

useEffect(() => {
  if (details?.id) {
    dispatch(
      getRecomendations(
        `/products/query?categoryIds=${details?.category?.parent?.id}&limit=5&page=${page}`
      )
    );
    setExtraQueryDone(false); 
  }
}, [id, page, details, dispatch]);

useEffect(() => {
  if (recomendations?.products) {
    setAllRecommendations(recomendations.products);

    if (
      recomendations?.totalResults < 5 &&
      details?.category?.parent?.parent?.id &&
      !extraQueryDone
    ) {
      dispatch(
        getRecomendations(
          `/products/query?categoryIds=${details?.category?.parent?.parent?.id}&limit=5&page=${page}`
        )
      );
      setExtraQueryDone(true);
    }
  }
}, [recomendations, extraQueryDone, details?.category?.parent?.parent?.id]);

useEffect(() => {
  setExtraQueryDone(false);
}, [details?.category?.parent?.id]);


  return (
    <Box component="section" mt={6}>
      {allRecommendations.length > 0 && (
        <Typography fontSize={{ xs: 26, md: 20 }} mt={4} fontWeight={600}>
          Вам могут понравиться
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
