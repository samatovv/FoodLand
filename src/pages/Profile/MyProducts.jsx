import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/products";
import { Grid2, Typography } from "@mui/material";
import Card from "../../components/Card";
import PaginationLarge from "../../components/Pagination";

const MyProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getProducts(`products?limit=5&page=${page}`));
  }, [page]);

  return (
    <>
      <Typography variant="h5" mt={4} fontWeight={600}>
        Мои товары
      </Typography>
      <Grid2 container>
        {Array.isArray(products?.results) &&
          products?.results?.map((item, idx) => (
            <Grid2 item size={2.4} key={idx}>
              <Card item={item} />
            </Grid2>
          ))}
      </Grid2>
      <PaginationLarge
        page={page}
        handleChange={handleChange}
        products={products}
      />
    </>
  );
};

export default MyProducts;
