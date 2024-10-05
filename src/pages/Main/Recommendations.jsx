import { Box, Container, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonMore from "../../components/ButtonMore";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { getProductsRecomended } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import PaginationLarge from "../../components/Pagination";
import { getProducts } from "../../redux/reducers/products";

const Recommendations = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const products = useSelector((state) => state.products.products);

  // useEffect(() => {
  //   dispatch(getProductsRecomended());
  // }, []);

  useEffect(() => {
    dispatch(getProducts(`recommendations?limit=4&page=${page}`));
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box component="section" p="76px 0" backgroundColor="#f4f4f4">
      <Container maxWidth="lg">
        <Box
          display="flex"
          mb={4}
          justifyContent="space-between"
          alignItems="end"
        >
          <div>
            <Typography
              variant="h6"
              color="var(--primary-light)"
              fontWeight="medium"
            >
              Вам могут понравится
            </Typography>
            <Typography variant="h2" fontWeight="bold" maxWidth={681} mt={1}>
              Рекомендуемые товары
            </Typography>
          </div>
          <Link to="/catalog">
            <ButtonMore sx={{ width: 157 }} txt="Все товары" />
          </Link>
        </Box>
        <Grid2 container spacing={5}>
          {Array.isArray(products?.results) &&
            products?.results?.map((item, idx) => (
              <Grid2 item size={3} key={idx}>
                <Card search item={item} />
              </Grid2>
            ))}
        </Grid2>
        <PaginationLarge
          page={page}
          handleChange={handleChange}
          products={products}
        />
      </Container>
    </Box>
  );
};

export default Recommendations;
