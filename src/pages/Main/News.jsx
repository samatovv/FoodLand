import { Box, Container, Grid2, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ButtonMore from "../../components/ButtonMore";
import img1 from "../../assets/images/news1.webp";
import img2 from "../../assets/images/news2.webp";
import img3 from "../../assets/images/news3.webp";
import img4 from "../../assets/images/bews4.webp";
import { Link } from "react-router-dom";
import { getNews } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.main.news);
  const lastPost = Array.isArray(news?.results) && news?.results[0];

  useEffect(() => dispatch(getNews()), []);
  return (
    <Box component="section" p="72px 0" backgroundColor="#FAF5F1">
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
              Последние новости
            </Typography>
            <Typography variant="h2" fontWeight="bold" maxWidth={681} mt={1}>
              Будьте в курсе о последних новостях
            </Typography>
          </div>
          <Link to="/news">
            <ButtonMore sx={{ width: 164 }} txt="Все новости" />
          </Link>
        </Box>
        <Grid2
          container
          sx={{
            "& .news__card": {
              "& svg": {
                transition: "all 800ms ease",
                "& rect": {
                  transition: "all 800ms ease",
                },
              },
              "&:hover svg": {
                transform: "translate(10px)",
                "& rect": {
                  fill: "var(--primary)",
                },
                "& path": {
                  fill: "#FFF",
                },
              },
            },
            "& img": {
              objectFit: "cover",
              transition: "all 800ms ease",
              "&:hover": {
                transform: "scale(1.3)",
              },
            },

            "& a": {
              display: "block",
              overflow: "hidden",
              borderRadius: "15px",
            },
          }}
        >
          <Grid2 item size={6}>
            <Box pr="38px" className="news__card">
              <Link to={`/news/${lastPost.id}`}>
                <img
                  style={{ borderRadius: "15px" }}
                  src={lastPost?.imageUrl}
                  width="100%"
                  height="375px"
                  alt=""
                />
              </Link>
              <Box
                display="flex"
                mt={3}
                alignItems="end"
                justifyContent="space-between"
              >
                <Typography variant="h5" fontWeight="700">
                  {lastPost.title}
                </Typography>
                <Typography color="#666" variant="body2">
                  {lastPost &&
                    new Intl.DateTimeFormat("ru", {
                      dateStyle: "short",
                      // timeStyle: "short",
                    }).format(new Date(lastPost?.createdAt))}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  wordWrap: "break-word",
                }}
                fontWeight={400}
                mt={1.5}
                mb={3}
              >
                {lastPost.content}
              </Typography>
              <Link
                to={`/news/${lastPost.id}`}
                style={{ textDecoration: "underline" }}
              >
                Читать далее
                <IconButton sx={{ p: 0, ml: 1 }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#E3E3E3" />
                    <path
                      d="M16.3536 10.3536C16.5488 10.1583 16.5488 9.84171 16.3536 9.64645L13.1716 6.46447C12.9763 6.2692 12.6597 6.2692 12.4645 6.46447C12.2692 6.65973 12.2692 6.97631 12.4645 7.17157L15.2929 10L12.4645 12.8284C12.2692 13.0237 12.2692 13.3403 12.4645 13.5355C12.6597 13.7308 12.9763 13.7308 13.1716 13.5355L16.3536 10.3536ZM4 10.5H16V9.5H4V10.5Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </IconButton>
              </Link>
            </Box>
          </Grid2>
          <Grid2 item size={6}>
            {Array.isArray(news?.results) &&
              news?.results?.slice(1, 4).map((item) => (
                <Box
                  className="news__card"
                  display="flex"
                  columnGap={3}
                  mb={5}
                  alignItems="end"
                >
                  <Link to={`/news/${item.id}`}>
                    <img
                      style={{ borderRadius: "15px" }}
                      src={item.imageUrl}
                      width="250px"
                      height="146px"
                      alt=""
                    />
                  </Link>
                  <div>
                    <Box
                      display="flex"
                      alignItems="end"
                      justifyContent="space-between"
                    >
                      <Typography
                        sx={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          maxWidth: "50%",
                        }}
                        variant="h5"
                        fontWeight="700"
                      >
                        {item.title}
                      </Typography>
                      <Typography color="#666" variant="body2">
                        {item.createdAt &&
                          new Intl.DateTimeFormat("ru", {
                            dateStyle: "short",
                          }).format(new Date(item?.createdAt))}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      fontWeight={400}
                      maxWidth="375px"
                      mt={1.5}
                      mb={3}
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        wordWrap: "break-word",
                      }}
                    >
                      {item.content}
                    </Typography>
                    <Link to="/news" style={{ textDecoration: "underline" }}>
                      Читать далее
                      <IconButton sx={{ p: 0, ml: 1 }}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="20" height="20" rx="10" fill="#E3E3E3" />
                          <path
                            d="M16.3536 10.3536C16.5488 10.1583 16.5488 9.84171 16.3536 9.64645L13.1716 6.46447C12.9763 6.2692 12.6597 6.2692 12.4645 6.46447C12.2692 6.65973 12.2692 6.97631 12.4645 7.17157L15.2929 10L12.4645 12.8284C12.2692 13.0237 12.2692 13.3403 12.4645 13.5355C12.6597 13.7308 12.9763 13.7308 13.1716 13.5355L16.3536 10.3536ZM4 10.5H16V9.5H4V10.5Z"
                            fill="#B3B3B3"
                          />
                        </svg>
                      </IconButton>
                    </Link>
                  </div>
                </Box>
              ))}
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default News;
