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
import { getProductsRecomended } from "../../redux/reducers/mainSlice";

const Recomendations = () => {
  const dispatch = useDispatch();

  const recomendations = useSelector((state) => state.main.recomendations);

  useEffect(() => {
    dispatch(getProductsRecomended());
  }, []);

  return (
    <Box component="section" mt={6}>
      <Typography variant="h5" mt={4} fontWeight={600}>
        Вам могут понравиться{" "}
      </Typography>
      <Grid2 container>
        {Array.isArray(recomendations?.results) &&
          recomendations?.results.slice(0, 4).map((item, idx) => (
            <Grid2 item size={2.4}>
              <Card search item={item} />
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
