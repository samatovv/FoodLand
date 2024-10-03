import {
  Box,
  Container,
  Grid2,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ButtonMore from "../../components/ButtonMore";
import Card from "../../components/Card";
import ArrowBackIcon from "../../components/ArrowBackIcon";
import ArrowForwardIcon from "../../components/ArrowForwardIcon";
import { Link } from "react-router-dom";
import { getProductsRecomended } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const Recommendations = () => {
  const dispatch = useDispatch();

  const recomendations = useSelector((state) => state.main.recomendations);

  useEffect(() => {
    dispatch(getProductsRecomended());
  }, []);
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
          {Array.isArray(recomendations?.results) &&
            recomendations?.results?.slice(0, 4).map((item, idx) => (
              <Grid2 item size={3} key={idx}>
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
      </Container>
    </Box>
  );
};

export default Recommendations;
