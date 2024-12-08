import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import ButtonMore from "../../components/ButtonMore";
// import partners from "../../assets/images/partners.webp";
import "swiper/css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/reducers/products";
import { getBanner } from "../../redux/reducers/mainSlice";
import Search from "../../shared/Search";

const First = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const banner = useSelector((state) => state.main.banner);

  useEffect(() => {
    if (!banner?.results?.length) dispatch(getBanner(`/banners?type=main`));
  }, []);

  return (
    <Box
      component="section"
      className="first"
      p="0 0 0"
      maxHeight="100vh"
      minHeight="100vh"
      height="100vh"
      sx={{
        background: `url(${
          Array.isArray(banner?.results) && banner?.results[0]?.imageUrl
        }) center/cover no-repeat;`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: "97px", md: "314px" },
        }}
      >
        <Typography
          fontWeight="bold"
          lineHeight="110%"
          variant="h1"
          m={{ xs: "0 auto", md: "unset" }}
          color="#FFFFFF"
          maxWidth={{ xs: 299, md: 657 }}
          textAlign={{ xs: "center", md: "start" }}
        >
          Ваш надежный поставщик сладкого и не только
        </Typography>
        <Box
          mt={{ xs: 5, md: 6 }}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          rowGap={2}
        >
          {/* <form
            style={{ display: "inline" }}
            action=""
            onSubmit={() => {
              navigate(`/catalog/?search=${value}&categoryIds=&page=1`);
            }}
          >
            <Search />

          </form> */}
          <ButtonMore
            radius="15px"
            sx={{
              width: { xs: "100%", md: 193, borderRadius: "15px" },
              height: 52,
            }}
            txt="Заказать звонок"
            href="tel:+996 550 114 477"
          />
        </Box>
        {/* {!md && (
          <Box
            mt={5}
            justifyContent="center"
            display="flex"
            alignItems="center"
            columnGap={3}
          >
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
        )} */}
      </Container>
      {/* <Carousel /> */}
    </Box>
  );
};

export default First;
