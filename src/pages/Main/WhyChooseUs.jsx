import {
  Box,
  Container,
  Typography,
  Grid2,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import star from "../../assets/images/star.svg";
import shield from "../../assets/images/shield.svg";
import img1 from "../../assets/images/why.webp";
import img2 from "../../assets/images/why2.webp";

const WhyChooseUs = () => {
  const md = useMediaQuery("(min-width:768px)");
  return (
    <Box
      component="section"
      p={{ xs: "56px 0", md: "43px 0 106px" }}
      backgroundColor="#FFF"
    >
      <Container maxWidth="lg">
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: " column",
              justifyContent: " space-between",
              alignItems: " self-end",
            }}
          >
            <Typography
              maxWidth={482}
              mt={{ xs: 0, md: 13.5 }}
              mb={{ xs: 4, md: 0 }}
              variant="h2"
              fontWeight="bold"
              lineHeight="120%"
              mr="100px"
            >
              Почему выбирают нас
            </Typography>
            {md && (
              <Box
                p="27px"
                border="1px solid #E6E6E6"
                borderLeft="none"
                borderRadius="10px"
                position="relative"
                className="none_border_left"
                maxHeight={350}
                maxWidth={335}
              >
                <Box
                  sx={{
                    p: "5px 10px",
                    backgroundColor: "var(--primary-light)",
                    borderRadius: "100px",
                    width: "fit-content",
                    position: "absolute",
                    top: 42,
                    left: 52,
                    borderTopLeftRadius: "0px",
                  }}
                >
                  <Typography
                    className="sans"
                    fontWeight={400}
                    color="#FFF"
                    variant="subtitle2"
                  >
                    200+ товаров
                  </Typography>
                </Box>
                <img src={img2} width="100%" height="290.95px" alt="Мука" />
              </Box>
            )}
          </Grid2>
          <Grid2 container size={{ xs: 12, md: 6 }} spacing={{ xs: 3, md: 0 }}>
            <Grid2
              size={{ xs: 12, md: 6 }}
              p="27px"
              backgroundColor="#FCFCF1"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
            >
              <Typography
                className="sans"
                variant="h4"
                mb={{ xs: 2, md: 4.6 }}
                maxWidth={276}
                fontWeight="600"
              >
                Нам можно доверять.
              </Typography>
              <Typography
                className="sans"
                variant="body1"
                mb={{ xs: 5, md: 12 }}
                color="#707070"
              >
                Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб помочь
                нашим клиентам становиться ещё лучше
              </Typography>
              <img src={star} alt="" />
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 6 }}
              p={{ xs: 0, md: "27px" }}
              width={{ xs: "100%", md: "50%" }}
              border={{ xs: "none", md: "1px solid #E6E6E6" }}
              borderRight="none"
              borderRadius="10px"
              className="none_border_right"
              position="relative"
              maxHeight={{ xs: 210, md: 350 }}
            >
              <Box
                sx={{
                  p: "5px 10px",
                  backgroundColor: "var(--primary-light)",
                  borderRadius: "100px",
                  width: "fit-content",
                  position: "absolute",
                  top: { xs: 20, md: 42 },
                  left: { xs: 20, md: 52 },
                }}
              >
                <Typography
                  className="sans"
                  fontWeight={400}
                  color="#FFF"
                  variant="subtitle2"
                >
                  c 2018 года
                </Typography>
              </Box>
              <img
                src={img1}
                style={{ objectFit: "cover", borderRadius: "10px" }}
                width="100%"
                height="100%"
                alt="Мука"
              />
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 6 }}
              p="27px"
              backgroundColor="#FFF5E8"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
            >
              <Typography
                className="sans"
                variant="h4"
                mb={{ xs: 2, md: 4.6 }}
                maxWidth={276}
                fontWeight="600"
              >
                Экспертность{" "}
              </Typography>
              <Typography
                className="sans"
                variant="body1"
                mb={{ xs: 3, md: 12 }}
                color="#707070"
              >
                Наша экспертность в сфере применения кондитерского сырья.
                Возможность предоставления технологической поддержки.
              </Typography>
              <img src={shield} alt="" />
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 6 }}
              p="27px"
              backgroundColor="#FCFCF1"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
            >
              <Typography
                variant="h4"
                mb={{ xs: 2, md: "34px" }}
                maxWidth={276}
                fontWeight="600"
                className="sans"
              >
                Гарантия качества
              </Typography>

              <Typography
                className="sans"
                fontSize={{ xs: 13, md: 11 }}
                mb={{ xs: 1, md: "33px" }}
                color="#707070"
              >
                Высокий уровень поставляемых услуг
              </Typography>
              <Typography
                className="sans"
                variant="body1"
                mb={{ xs: 3, md: "31px" }}
                color="#707070"
              >
                Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб помочь
                нашим клиентам становиться ещё лучше
              </Typography>
              <img src={star} alt="" />
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
