import {
  Box,
  Grid2,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIcon from "../../components/ArrowBackIcon";
import ArrowForwardIcon from "../../components/ArrowForwardIcon";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/products";

const Recomendations = ({ details }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (details?.id)
      dispatch(
        getProducts(
          `https://foodlandtest.com/v1/products?limit=10&page=1&category=${details?.category}`
        )
      );
  }, [details]);

  return (
    <Box component="section" mt={6}>
      <Typography variant="h5" mt={4} fontWeight={600}>
        Вам могут понравиться{" "}
      </Typography>
      <Grid2 container>
        {Array.isArray(products?.results) &&
          products?.results.slice(0, 4).map((item, idx) => (
            <Grid2 item size={2.4}>
              <Card  item={item} />
            </Grid2>
          ))}
      </Grid2>
      <Box display="flex" justifyContent="center" mt={5}>
        <Pagination
          size="large"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          count={5}
          color="primary"
        />
      </Box>{" "}
    </Box>
  );
};

export default Recomendations;
