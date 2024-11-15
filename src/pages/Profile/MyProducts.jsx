import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/products";
import { Grid2, Typography, useMediaQuery } from "@mui/material";
import Card from "../../components/Card";
import PaginationLarge from "../../components/Pagination";

const MyProducts = ({ setCart }) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:769px)");
  const products = useSelector((state) => state.products.products);

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getProducts(`products?limit=${md ? 5 : 6}&page=${page}`));
  }, [page]);

  return (
    <>
      <Typography variant="h5" mt={4} fontWeight={600}>
        Мои товары
      </Typography>
      <Grid2 container spacing={2} mt={2.5}>
        {Array.isArray(products?.results) &&
          products?.results?.map((item, idx) => (
            <Grid2
              item
              size={{ xs: 6, sm: 4, md: 3, lg: 2.4, xl: 2.4 }}
              key={idx}
            >
              <Card setCart={setCart} item={item} />
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
