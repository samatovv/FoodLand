import {
  Box,
  Container,
  Grid2,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import ButtonMore from "../../components/ButtonMore";
import { Link } from "react-router-dom";
import { getNews } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";
import emptySvg from "../../assets/images/not-image.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:769px)");

  const news = useSelector((state) => state.main.news);
  const sortedNews = Array.isArray(news?.results)
    ? [...news.results].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : [];

  const lastPost = sortedNews[0];

  const htmlDecode = (content) => {
    const e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };

  const newsRefs = useRef([]);
  useEffect(() => {
    gsap.fromTo(
      newsRefs.current[0],
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: newsRefs.current[0],
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  
    newsRefs.current.forEach((el, idx) => {
      if (idx > 0) {
        gsap.fromTo(
          el,
          { opacity: 0, x: -100 }, 
          {
            opacity: 1,
            x: 0, 
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, [news]);
  

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      {news?.results?.length && (
        <Box
          component="section"
          p={{ xs: "56px 0", md: "72px 0" }}
          backgroundColor="#FAF5F1"
        >
          <Container maxWidth="lg">
            <Box
              display="flex"
              mb={4}
              justifyContent="space-between"
              alignItems="end"
            >
              <div>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  maxWidth={681}
                  mt={1}
                  width={{ xs: "100%", md: "90%" }}
                >
                  Будьте в курсе последних событий
                </Typography>
              </div>
              {md && (
                <Link to="/news">
                  <ButtonMore sx={{ width: 164 }} txt="Все новости" />
                </Link>
              )}
            </Box>
            <Grid2 container>
              {md && (
                <Grid2 size={6} ref={(el) => (newsRefs.current[1] = el)}>
                  <Link to={`/news/${lastPost?.id}`}>
                    <Box
                      pr="38px"
                      className="news__card"
                      sx={{
                        "& svg": {
                          transition: "all 800ms ease",
                          "& rect": {
                            transition: "all 800ms ease",
                          },
                        },

                        "& img": {
                          objectFit: "cover",
                          transition: "all 800ms ease",
                        },

                        "&:hover": {
                          "& svg": {
                            transform: "translate(10px)",
                            "& rect": {
                              fill: "var(--primary)",
                            },
                            "& path": {
                              fill: "#FFF",
                            },
                          },
                          "& img": {
                            transform: "scale(1.1)",
                          },
                        },

                        "& .img": {
                          display: "block",
                          overflow: "hidden",
                          borderRadius: "15px",
                        },
                      }}
                    >
                      <div className="img">
                        <img
                          style={{ borderRadius: "15px" }}
                          src={lastPost?.imageUrl || emptySvg}
                          width="100%"
                          height="375px"
                          alt=""
                        />
                      </div>
                      <Box
                        display="flex"
                        mt={3}
                        alignItems="end"
                        justifyContent="space-between"
                      >
                        <Typography variant="h5" fontSize={{ xs: 18, md: 28 }} fontWeight="700">
                          {lastPost?.title}
                        </Typography>
                        <Typography color="#666" fontSize={{ xs: 14, md: 16 }} variant="body2">
                          {lastPost &&
                            new Intl.DateTimeFormat("ru", {
                              dateStyle: "short",
                            }).format(new Date(lastPost?.createdAt))}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        className="sans"
                        sx={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          wordWrap: "break-word",
                          color: "#000000",
                        }}
                        fontSize={{ xs: 14, md: 16 }}
                        fontWeight={400}
                        mt={1.5}
                        mb={3}
                        dangerouslySetInnerHTML={{
                          __html: htmlDecode(lastPost.content),
                        }}
                      />
                      <span
                        className="sans"
                        style={{ textDecoration: "underline",fontSize: 14 }}
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
                            <rect
                              width="20"
                              height="20"
                              rx="10"
                              fill="#E3E3E3"
                            />
                            <path
                              d="M16.3536 10.3536C16.5488 10.1583 16.5488 9.84171 16.3536 9.64645L13.1716 6.46447C12.9763 6.2692 12.6597 6.2692 12.4645 6.46447C12.2692 6.65973 12.2692 6.97631 12.4645 7.17157L15.2929 10L12.4645 12.8284C12.2692 13.0237 12.2692 13.3403 12.4645 13.5355C12.6597 13.7308 12.9763 13.7308 13.1716 13.5355L16.3536 10.3536ZM4 10.5H16V9.5H4V10.5Z"
                              fill="#B3B3B3"
                            />
                          </svg>
                        </IconButton>
                      </span>
                    </Box>
                  </Link>
                </Grid2>
              )}
              <Grid2 ref={(el) => (newsRefs.current[0] = el)} size={{ xs: 12, md: 6 }}>
                {Array.isArray(sortedNews) &&
                  sortedNews
                    ?.slice(md ? 1 : 0, 4)
                    .map((item, idx) => (
                      <NewsCard
                        key={idx}
                        item={item}
                        idx={idx}
                      />
                    ))}
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      )}
    </>
  );
};

export default News;
