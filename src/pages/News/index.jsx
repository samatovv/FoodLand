import { Button, Container, Typography, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { getNews } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";
import empty from "../../assets/images/empty-no-bg.svg";
import { useNavigate } from "react-router";

const News = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const news = useSelector((state) => state.main.news);
  
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const sortedNews = news?.results?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <Container sx={{ minHeight: "50vh" }}>
      <Typography variant="h2" mb={3} fontWeight={700} mt={5}>
        Новости
      </Typography>
      {!sortedNews?.length ? (
        <center>
          <img src={empty} alt="" />
          <Typography mt={5} variant="h5" color="#707070" fontWeight={400} mb={5}>
            На данный момент Новости отсутствуют
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            sx={{ color: "#FFF" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3L6.41421 5.58579C5.63316 6.36684 5.63317 7.63316 6.41421 8.41421L9 11" stroke="#D2D2D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Вернуться назад
          </Button>
        </center>
      ) : (
        <Grid container spacing={3}>
          {sortedNews.slice(0, 4).map((item, idx) => (
            <Grid item xs={12} sm={12} md={6} key={idx}>
              <NewsCard item={item} idx={idx} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default News;
