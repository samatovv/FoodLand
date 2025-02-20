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
    <Container maxWidth="lg" sx={{ display: "flex", gap: { xs: 0, md: 5}, flexDirection: { xs: "column", md: "row"}, justifyContent: { xs: "start", md: "space-between" } }}>
      <Box component="section" p="46px 0 59px" width={"100%"} >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Typography fontSize={{ xs: 25, md: "35px", marginTop:"15px" }} fontWeight="700">
            {details?.title}
          </Typography>
          <Box
            component="img"
            sx={{
              mt: 1,
              mb: { xs: 3, md: 2 },
              borderRadius: 6,
              objectFit: details.imageUrl ? "cover" : "contain",

              width: "100%",
              display: "block",
              background: "#F4F4F4",
            }}
            height={{ xs: 146, md: "425px" }}
            src={details.imageUrl || emptySvg}
            alt="Новость"
          />

          <Typography
            mt={2.5}
            width={"100%"}
            fontSize={{ xs: 14, md: 16 }}
            fontWeight={400}
            className="sans"
            lineHeight="27.24px"
            dangerouslySetInnerHTML={{ __html: htmlDecode(details.content) }}
          />
          <Typography color="#666" variant="body2" marginTop={2}>
            {details?.createdAt
              ? new Date(details.createdAt).toLocaleDateString("ru-RU")
              : ""}
          </Typography>
      </Box>
      
      <Box component="section" p="80px 0 59px" >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography fontSize={{ xs: 18, md: "35px" }} fontWeight="700">
              Недавние новости
            </Typography>
          </Box>
          <Grid2 container spacing="20px" width={{ xs: "100%", md: "444px"}}>
            {Array.isArray(news?.results) &&
              news?.results
                ?.slice(0, 3)
                .filter((item) => item?.id !== id)
                .map((item, idx) => (
                  <Grid2 key={idx}>
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
                          width: "100%",
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
                          <Box
                            component="img"
                            src={item?.imageUrl || emptySvg}
                            alt="i"
                            sx={{
                              borderRadius: '15px',
                              width: { xs: '100%', md: '444px' },
                              height: '238px',
                            }}
                          />
                        </div>

                        <Box
                          display="flex"
                          mt={1.5}
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
                          fontSize={{ xs: 14, md: 16 }}
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
      </Box>
    </Container>
  );
};

export default NewsDetails;
