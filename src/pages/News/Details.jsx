import {
  Box,
  Breadcrumbs,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link, useLocation, useParams } from "react-router-dom";
import { getNews, getNewsDetails } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import emptySvg from "../../assets/images/not-image.svg"

const NewsDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { id } = useParams();

  const details = useSelector((state) => state.main.newsDetails);
  const news = useSelector((state) => state.main.news);

  const htmlDecode = (content) => {
    const e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  useEffect(() => {
    dispatch(getNewsDetails(id));
    dispatch(getNews());
  }, [location.pathname]);

  const breadcrumbs = [
    <Link key="1" to="/" className="sans">
      Главная
    </Link>,
    <Typography className="sans" key="2" sx={{ color: "text.primary" }}>
      Новости
    </Typography>,
  ];
  return (
    <>
      <Box component="section" p="45px 0 72px">
        <Container maxWidth="lg">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Box
            component="img"
            sx={{
              mt: 3,
              mb: { xs: 3, md: 4 },
              borderRadius: 2,
              objectFit: details.imageUrl ? "cover" : "contain",
              maxHeight: details.imageUrl ? { xs: 146, md: "351px" } : "200px",
              width: "100%",
              display: "block",
              background: "#F4F4F4"
            }}
            width="100%"
            height={details.imageUrl ? { xs: 146, md: "351px" } : "auto"} 
            src={details.imageUrl || emptySvg}
            alt="Новость"
          />

          <Typography fontSize={{ xs: 25, md: "35px" }} fontWeight="700">
            {details?.title}
          </Typography>
          <Typography
            mt={2.5}
            fontSize={{ xs: 14, md: 16 }}
            fontWeight={400}
            className="sans"
            lineHeight="27.24px"
            dangerouslySetInnerHTML={{ __html: htmlDecode(details.content) }}
          />
        </Container>
      </Box>
      <Box component="section" backgroundColor="#F4F4F4" p="46px 0 59px">
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography fontSize={{ xs: 18, md: "40px" }} fontWeight="700">
              Недавние новости
            </Typography>
          </Box>
          <Grid2 container spacing="20px">
            {Array.isArray(news?.results) &&
              news?.results
                ?.slice(0, 3)
                .filter((item) => item?.id !== id)
                .map((item, idx) => (
                  <Grid2 key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Link to={`/news/${item?.id}`}>
                      <Box
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
                              transform: "scale(1.3)",
                            },
                          },

                          "& .div": {
                            display: "block",
                            overflow: "hidden",
                            borderRadius: "15px",
                          },
                        }}
                      >
                        <div className="div">
                          <img
                            style={{ borderRadius: "15px" }}
                            src={item?.imageUrl || emptySvg}
                            width="100%"
                            height="256px"
                            alt=""
                          />
                        </div>

                        <Box
                          display="flex"
                          mt={3}
                          alignItems="end"
                          justifyContent="space-between"
                        >
                          <Typography
                            sx={{
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              maxWidth: "80%",
                              width: "80%",
                            }}
                            variant="h5"
                            fontWeight="700"
                          >
                            {item?.title}
                          </Typography>
                          <Typography color="#666" variant="body2">
                            {item &&
                              new Intl.DateTimeFormat("ru", {
                                dateStyle: "short",
                                // timeStyle: "short",
                              }).format(new Date(item?.createdAt))}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          fontWeight={400}
                          maxWidth="375px"
                          mt={1.5}
                          mb={3}
                          className="sans"
                          sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            wordWrap: "break-word",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: htmlDecode(item.content),
                          }}
                        />
                        <span
                          className="sans"
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
                ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
};

export default NewsDetails;
