import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { getNews } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";
import empty from "../../assets/images/emptyCart.svg";
import { useNavigate } from "react-router";

const News = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const news = useSelector((state) => state.main.news);

  useEffect(() => dispatch(getNews()), []);

  return (
    <Container
      sx={{
        minHeight: "50vh",
      }}
    >
      <Typography variant="h2" mb={3} fontWeight={700} mt={5}>
        Новости
      </Typography>
      {!news?.results?.length ? (
        <center>
          <img src={empty} alt="" />
          <Typography
            mt={5}
            variant="h5"
            color="#707070"
            fontWeight={400}
            mb={5}
          >
            На данный момент Новости отсутсвуют
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            sx={{
              color: "#FFF",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3L6.41421 5.58579C5.63316 6.36684 5.63317 7.63316 6.41421 8.41421L9 11"
                stroke="#D2D2D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Вернуться назад
          </Button>
        </center>
      ) : (
        Array.isArray(news?.results) &&
        news?.results?.map((item, idx) => <NewsCard item={item} idx={idx} />)
      )}
    </Container>
  );
};

export default News;
