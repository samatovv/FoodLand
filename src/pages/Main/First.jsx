import React, { useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";

import ButtonMore from "../../components/ButtonMore";
import partners from "../../assets/images/partners.webp";
import "swiper/css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/reducers/products";
import Carousel from "../../shared/Carousel";

const First = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <Box component="section" p="138px 0 72px" backgroundColor="#f4f4f4">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight="bold"
          lineHeight="110%"
          textAlign="center"
          variant="h1"
        >
          Ваш надежный поставщик сладкого и не только
        </Typography>
        <Box mt={6}>
          <form
            style={{ display: "inline" }}
            action=""
            onSubmit={() => {
              navigate(`/catalog/?search=${value}`);
            }}
          >
            <TextField
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                dispatch(setSearch(e.target.value));
              }}
              placeholder="Найти..."
              sx={{ mr: "34.5px", width: 318 }}
            />
          </form>
          <ButtonMore sx={{ width: 193 }} txt="Заказать звонок"></ButtonMore>
        </Box>
        <Box mt={5} display="flex" alignItems="center" columnGap={3}>
          <img src={partners} width="152px" height="40px" alt="Партнеры" />
          <Typography
            className="sans"
            variant="subtitle2"
            color="#737373"
            fontWeight="regular"
          >
            +50 компаний
          </Typography>
        </Box>
      </Container>
      <Carousel />
    </Box>
  );
};

export default First;
