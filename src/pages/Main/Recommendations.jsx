import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonMore from "../../components/ButtonMore";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PaginationLarge from "../../components/Pagination";
import { getRecomendations } from "../../redux/reducers/products";

const Recommendations = ({ setCart }) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:768px)");
  const sm = useMediaQuery("(min-width:426px)");

  const [page, setPage] = useState(1);

  const products = useSelector((state) => state.products.recomendations);

  useEffect(() => {
    dispatch(
      getRecomendations(`recommendations?limit=${sm ? 4 : 4}&page=${page}`)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      component="section"
      p={{ xs: "56px 0", md: "76px 0" }}
      // overflow="scroll"
      backgroundColor="#f4f4f4"
    >
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
              Вам могут понравиться
            </Typography>
            <Typography variant="h2" fontWeight="bold" maxWidth={681} mt={1}>
              Рекомендуемые товары
            </Typography>
          </div>
          {md && (
            <Link to="/catalog/?search=&categoryIds=&page=1&recomendations">
              <ButtonMore sx={{ width: 157 }} txt="Все товары" />
            </Link>
          )}
        </Box>
        <Grid2
          // sx={{ width: { xs: "3000px", md: "unset" }, overflowX: "scroll" }}
          container
          spacing={{ xs: 1, lg: 4 }}
        >
          {Array.isArray(products?.results) &&
            products?.results?.map((item, idx) => (
              <Grid2 size={{ xs: 6, md: 3 }} key={idx}>
                <Card setCart={setCart} search item={item} />
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
