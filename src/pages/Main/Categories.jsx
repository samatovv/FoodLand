import { Box, Container, Grid2, Typography } from "@mui/material";
import React, { useEffect } from "react";
import img from "../../assets/images/category-1.webp";
import img2 from "../../assets/images/category-2.webp";
import img3 from "../../assets/images/category-3.webp";
import img4 from "../../assets/images/category-4.webp";
import ButtonMore from "../../components/ButtonMore";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducers/mainSlice";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.main.categories);

  useEffect(() => dispatch(getCategories()), []);
  return (
    <Box component="section" backgroundColor="#FAF5F1" p="72px 0 152px">
      <Container maxWidth="lg">
        <Typography
          color="#493829"
          variant="h2"
          fontWeight="bold"
          lineHeight="120%"
          maxWidth={681}
          mb={5}
        >
          Просмотр товаров по{" "}
          <span style={{ color: "#B89776" }}>категориям</span>
        </Typography>
        <Grid2
          container
          spacing={5}
          sx={{
            "& img": {
              borderRadius: "16px",
            },
            "& .category__card": {
              borderRadius: "16px",
              overflow: "hidden",
            },
            "& .category__more": {
              position: "absolute",
              overflow: "hidden",
              bottom: 20,
              left: 20,
              color: "#FFF",
              zIndex: 3,
            },
          }}
        >
          {Array.isArray(categories) &&
            categories.slice(0, 4).map((item, idx) => (
              <Grid2 item size={3} key={idx}>
                <Box className="category__card" position="relative">
                  <img
                    width="100%"
                    height="396px"
                    style={{ objectFit: "cover", minHeight: "396px" }}
                    src={item.image.url}
                    alt=""
                  />
                  <Box className="category__more">
                    <Typography
                      variant="h5"
                      mb={2.5}
                      maxWidth={219}
                      fontWeight="bold"
                    >
                      {item.name}
                    </Typography>
                    <Link to={`/catalog/?category=${item.id}`}>
                      <ButtonMore
                        txt="Подробнее "
                        sx={{ width: "100%", "& span": { color: "#000" } }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Grid2>
            ))}

          {/* <Grid2 item size={3}>
            <Box className="category__card" position="relative">
              <img src={img} width="100%" alt="Шоколадная продукция" />
              <Box className="category__more">
                <Typography
                  variant="h5"
                  mb={2.5}
                  maxWidth={219}
                  fontWeight="bold"
                >
                  Ореховая продукция
                </Typography>
                <Link to="/catalog">
                  <ButtonMore
                    txt="Подробнее "
                    sx={{ width: "100%", "& span": { color: "#000" } }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid2>
          <Grid2 item size={3}>
            <Box className="category__card" position="relative">
              <img src={img2} width="100%" alt="Шоколадная продукция" />
              <Box className="category__more">
                <Typography
                  variant="h5"
                  mb={2.5}
                  maxWidth={219}
                  fontWeight="bold"
                >
                  Молочная продукция
                </Typography>
                <Link to="/catalog">
                  <ButtonMore
                    txt="Подробнее "
                    sx={{ width: "100%", "& span": { color: "#000" } }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid2>
          <Grid2 item size={3}>
            <Box className="category__card" position="relative">
              <img src={img3} width="100%" alt="Шоколадная продукция" />
              <Box className="category__more">
                <Typography
                  variant="h5"
                  mb={2.5}
                  maxWidth={219}
                  fontWeight="bold"
                >
                  Декоративные изделия
                </Typography>
                <Link to="/catalog">
                  <ButtonMore
                    sx={{ width: "100%", "& span": { color: "#000" } }}
                    txt="Подробнее "
                  />
                </Link>{" "}
              </Box>
            </Box>
          </Grid2> */}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Categories;
