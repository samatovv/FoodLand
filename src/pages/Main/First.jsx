import React, { useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";

import ButtonMore from "../../components/ButtonMore";
import partners from "../../assets/images/partners.webp";
import main from "../../assets/images/main.png";
import "swiper/css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/reducers/products";
import Carousel from "../../shared/Carousel";

const First = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  return (
    <Box
      component="section"
      className="first"
      p="0 0 0"
      maxHeight="100vh"
      minHeight="100vh"
      height="100vh"
      backgroundColor="#f4f4f4"
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: "314px",
        }}
      >
        <Typography
          fontWeight="bold"
          lineHeight="110%"
          variant="h1"
          maxWidth={657}
        >
          Ваш надежный поставщик сладкого и не только
        </Typography>
        <Box
          mt={6}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          rowGap={2}
        >
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
              sx={{
                borderRadius: "16px",
                "& input.MuiOutlinedInput-input": {
                  p: "12.5px 14.66px",
                  borderRadius: "16px",
                },
                mr: "34.5px",
                width: { xs: "100%", md: 318 },

                "&.MuiFormControl-root": {
                  borderRadius: "16px",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "16px",
                },
              }}
            />
          </form>
          <ButtonMore
            sx={{ width: { xs: "100%", md: 193, borderRadius: "16px" } }}
            txt="Заказать звонок"
          ></ButtonMore>
        </Box>
        {/* <Box mt={5} display="flex" alignItems="center" columnGap={3}>
          <img src={partners} width="152px" height="40px" alt="Партнеры" />
          <Typography
            className="sans"
            variant="subtitle2"
            color="#737373"
            fontWeight="regular"
          >
            +50 компаний
          </Typography>
        </Box> */}
      </Container>
      {/* <Carousel /> */}
    </Box>
  );
};

export default First;
