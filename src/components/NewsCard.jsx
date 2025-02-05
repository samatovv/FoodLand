import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptySvg from "../assets/images/not-image.svg";

const NewsCard = ({ item }) => {
  const [imgSrc, setImgSrc] = useState(item.imageUrl || emptySvg);

  const htmlDecode = (content) => {
    const e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };

  return (
    <Link to={`/news/${item?.id}`}>
      <Box
        key={item.id}
        className="news__card"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "end" }}
        columnGap={3}
        mb={5}
        width="100%"
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
        <Box
          className="img"
          sx={{
            minWidth: "250px",
            width: { xs: "100%", sm: "250px" },
          }}
        >
          {item.imageUrl ? (
            <Box
              component="img"
              style={{ borderRadius: "15px" }}
              src={imgSrc}
              width={{ xs: "100%", sm: "250px" }}
              height={{ xs: "196px", sm: "146px" }}
              alt="news image"
              onError={() => setImgSrc(emptySvg)}
            />
          ) : (
            <Box
              component="img"
              src={emptySvg}
              width={{ xs: "100%", sm: "250px" }}
              height={{ xs: "196px", sm: "146px" }}
              alt="placeholder"
            />
          )}
        </Box>
        <Box sx={{ width: { xs: "100%", md: "76%", height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" } }}>
          <Box display="flex" mt={{ xs: 1, sm: 0 }} alignItems="end" justifyContent="space-between">
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
            className="sans"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              // WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              // paddingBottom: 3,
              wordBreak: "break-word", 
              // height: "4.5em", 
            }}
            dangerouslySetInnerHTML={{
              __html: htmlDecode(item.content),
            }}
          />
          <span className="sans" style={{ textDecoration: "underline" }}>
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
          </span>
        </Box>
      </Box>
    </Link>
  );
};

export default NewsCard;
