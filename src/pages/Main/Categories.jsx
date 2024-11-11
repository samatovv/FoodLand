import { Box, Container, Grid2, Typography } from "@mui/material";
import React, { useEffect } from "react";
import img from "../../assets/images/category-1.png";
import img2 from "../../assets/images/category-2.png";
import img3 from "../../assets/images/category-3.png";
import img4 from "../../assets/images/category-4.png";
import ButtonMore from "../../components/ButtonMore";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducers/mainSlice";

const categories = [
  {
    title: "Шоколад и какао продукты",
    img: img,
    id: "670cfc0e8d01bf78e1ad9a6c",
  },
  { title: "Молочная продукция", img: img2, id: "670cfc198d01bf78e1ad9b16" },
  { title: "Ингредиенты", img: img3, id: "670cfc088d01bf78e1ad9a53" },
  {
    title: "Покрытия и наполнители",
    img: img4,
    id: "670cfc0a8d01bf78e1ad9a5c",
  },
];

const Categories = () => {
  const dispatch = useDispatch();

  // const categories = useSelector((state) => state.main.categories);

  useEffect(() => dispatch(getCategories()), []);
  return (
    <Box
      component="section"
      backgroundColor="#FAF5F1"
      p={{ xs: "56px 0", md: "72px 0 152px" }}
    >
      <Container maxWidth="lg">
        <Typography
          color="#493829"
          variant="h2"
          fontWeight="bold"
          lineHeight="120%"
          maxWidth={681}
          mb={{ xs: 3, md: 5 }}
        >
          Просмотр товаров по{" "}
          <span style={{ color: "#B89776" }}>категориям</span>
        </Typography>
        <Grid2
          container
          spacing={{ xs: 2, lg: 5 }}
          sx={{
            "& .category__card": {
              borderRadius: "16px",
              overflow: "hidden",
            },
            "& .category__more": {
              position: "absolute",
              overflow: "hidden",
              bottom: { xs: 16, lg: 20 },
              left: { xs: 16, lg: 20 },
              color: "#FFF",
              zIndex: 3,
            },
          }}
        >
          {Array.isArray(categories) &&
            categories.slice(0, 4).map((item, idx) => (
              <Grid2 item size={{ xs: 6, md: 3 }} key={idx}>
                <Box className="category__card">
                  <Box
                    component="img"
                    width="100%"
                    height={{ xs: 250, md: "396px" }}
                    sx={{
                      objectFit: "cover",
                      minHeight: { xs: 250, md: "396px" },
                      borderRadius: "16px",
                    }}
                    src={item?.img}
                    alt=""
                  />
                  <Box className="category__more" width="80%">
                    <Typography
                      fontSize={{ xs: 16, md: 20 }}
                      mb={{ xs: 1, md: 2.5 }}
                      maxWidth={219}
                      fontWeight="bold"
                    >
                      {item.title}
                    </Typography>
                    <Link to={`/catalog/?category=${item.id}`}>
                      <ButtonMore
                        txt="Подробнее "
                        sx={{
                          width: "100%",
                          p: { xs: "4px", md: "4px 4px 4px 16px;" },
                          "& span": { color: "#000" },
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Grid2>
            ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Categories;
