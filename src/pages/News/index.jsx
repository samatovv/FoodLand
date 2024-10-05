import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";

const News = () => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.main.news);

  useEffect(() => dispatch(getNews()), []);

  return (
    <Container>
      <Typography variant="h2" mb={3} fontWeight={700} mt={5}>
        Новости
      </Typography>
      {Array.isArray(news?.results) &&
        news?.results?.map((item, idx) => <NewsCard item={item} idx={idx} />)}
    </Container>
  );
};

export default News;
