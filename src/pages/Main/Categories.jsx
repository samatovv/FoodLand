import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../assets/images/category-1.webp";
import img2 from "../../assets/images/category-2.webp";
import img3 from "../../assets/images/ingredients.jpeg";
import img4 from "../../assets/images/category-4.webp";
import img8 from "../../assets/images/category-3.webp";
import img5 from "../../assets/images/category-5.webp";
import img6 from "../../assets/images/category-6.webp";
import img7 from "../../assets/images/milk_prod.jpeg"
import ButtonMore from "../../components/ButtonMore";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/reducers/mainSlice";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Шоколад и какао продукты",
    img: img,
    id: "67b35ef97b3c3a8da91744a8",
  },
  { title: "Продукция для бариста", img: img2, id: "67b35f4899ebd3e2532f47ab" },
  { title: "Молочная продукция", img: img7, id: "67b35f6e99ebd3e2532f4851" },
  { title: "Ингредиенты", img: img3, id: "67b35ef47b3c3a8da9174492" },
  { title: "Инвентарь", img: img5, id: "67b35ee67b3c3a8da917444d" },
  { title: "Орехи и сухофрукты", img: img8, id: "67bc70d57ead33026b001985" },
  {
    title: "Покрытия и наполнители",
    img: img4,
    id: "67b35efa7b3c3a8da91744b1",
  },
  {
    title: "Пищевая печать",
    img: img6,
    id: "67b35f7299ebd3e2532f4860",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryRefs = useRef([]);

  const handleClick = (id) => {
    navigate(`/catalog/?search=&categoryIds=${id}&page=1`);
  };
  
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    categoryRefs.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <Box component="section" backgroundColor="#FAF5F1" p={{ xs: "56px 0", md: "72px 0 152px" }}>
      <Container maxWidth="lg">
        <Typography
          color="#493829"
          variant="h2"
          fontWeight="bold"
          lineHeight="120%"
          maxWidth={681}
          mb={{ xs: 3, md: 5 }}
        >
          Просмотр товаров по <span style={{ color: "#B89776" }}>категориям</span>
        </Typography>
        <Box display="grid" gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={2}>
          {Array.isArray(categories) &&
            categories.map((item, idx) => (
              <Box
                key={item.id}
                ref={(el) => (categoryRefs.current[idx] = el)}
                className="category__card"
                sx={{ borderRadius: "16px", overflow: "hidden" }}
              >
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
                  alt={item?.title}
                />
                <Box className="category__more" width={{ xs: "80%", md: "85%", lg: "87%" }} sx={{ position: "absolute", bottom: 20, left: 20, color: "#FFF", zIndex: 3, }}>
                  <Typography fontSize={{ xs: 16, md: 20 }} mb={{ xs: 1, md: 2.5 }} maxWidth={219} fontWeight="bold">
                    {item?.title}
                  </Typography>
                  <Box onClick={() => handleClick(item.id)}>
                    <ButtonMore
                      txt="Подробнее "
                      radius="15px"
                      sx={{
                        borderRadius: "15px",
                        width: "100%",
                        p: { xs: "4px", md: "4px 4px 4px 16px;" },
                        "& span": { color: "#000" },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
