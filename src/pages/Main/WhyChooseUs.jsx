import {
  Box,
  Container,
  Typography,
  Grid2,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import star from "../../assets/images/star.svg";
import shield from "../../assets/images/shield.svg";
import img1 from "../../assets/images/why.webp";
import img2 from "../../assets/images/why2.webp";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const md = useMediaQuery("(min-width:992px)");

  const cardsRef = useRef([]);
  useEffect(() => {
    cardsRef.current.forEach((el) => {
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
          }          
        }
      );
    });
  }, []);
    return (
    <Box
      component="section"
      p={{ xs: "56px 0", md: "43px 0 106px" }}
      backgroundColor="#FFF"
    >
      <Container maxWidth="lg">
        <Grid2 container>
          <Grid2
            ref={(el) => (cardsRef.current[0] = el)}
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: " column",
              justifyContent: " space-between",
              alignItems: { xs: "start", md: "self-end" },
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
                ref={(el) => (cardsRef.current[1] = el)}
                p="27px"
                border="1px solid #E6E6E6"
                borderRadius="10px"
                position="relative"
                maxHeight={350}
                maxWidth={335}
                left="2px"
                top="1px"
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
              ref={(el) => (cardsRef.current[2] = el)}
              size={{ xs: 12, md: 6 }}
              p="27px"
              backgroundColor="#FCFCF1"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
              position="relative"
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              alignItems="baseline"
              top="1px"
              left="1px"
            >
              <div>
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
                  mb={{ xs: "22px", lg: "0" }}
                  color="#707070"
                  fontSize={{ xs: 14, md: 16 }}
                  fontWeight={400}
                >
                  Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб
                  помочь нашим клиентам становиться ещё лучше
                </Typography>
              </div>
              <img src={star} alt="" />
            </Grid2>
            <Grid2
              ref={(el) => (cardsRef.current[3] = el)}
              size={{ xs: 12, md: 6 }}
              p={{ xs: 0, md: "27px" }}
              width={{ xs: "100%", md: "50%" }}
              border={{ xs: "none", md: "1px solid #E6E6E6" }}
              borderRadius="10px"
              position="relative"
              top="1px"
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
              ref={(el) => (cardsRef.current[4] = el)}
              size={{ xs: 12, md: 6 }}
              p="27px"
              height={{ xs: "auto", md: "350px" }}
              backgroundColor="#FFF5E8"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
              position="relative"
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              alignItems="baseline"
              left="1px"
            >
              <div>
                <Typography
                  className="sans"
                  variant="h4"
                  mb={{ xs: 2, md: "73px" }}
                  maxWidth={276}
                  fontWeight="600"
                >
                  Экспертность{" "}
                </Typography>
                <Typography
                  className="sans"
                  variant="body1"
                  mb={{ xs: "22px", lg: "0" }}
                  color="#707070"
                  fontSize={{ xs: 14, md: 16 }}
                  fontWeight={400}
                >
                  Наша экспертность в сфере применения кондитерского сырья.
                  Возможность предоставления технологической поддержки.
                </Typography>
              </div>
              <img src={shield} alt="" />
            </Grid2>
            <Grid2
              ref={(el) => (cardsRef.current[5] = el)}
              size={{ xs: 12, md: 6 }}
              p="27px"
              backgroundColor="#FCFCF1"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              alignItems="baseline"
              maxHeight={350}
            >
              <div>
                {" "}
                <Typography
                  variant="h4"
                  mb={{ xs: 2, lg: "34px" }}
                  maxWidth={250}
                  fontWeight="600"
                  className="sans"
                >
                  Гарантия качества
                </Typography>
                <Typography
                  className="sans"
                  whiteSpace="nowrap"
                  mb={{ xs: 1, lg: "33px" }}
                  color="#707070"
                  fontSize={{ xs: 14, md: 16 }}
                  fontWeight={400}
                >
                  Высокий уровень поставляемых услуг
                </Typography>
                <Typography
                  className="sans"
                  variant="body1"
                  mb={{ xs: '22px', lg: "0" }}
                  color="#707070"
                  fontSize={{ xs: 14, md: 16 }}
                  fontWeight={400}
                >
                  Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб
                  помочь нашим клиентам становиться ещё лучше
                </Typography>
              </div>
              <img src={star} alt="" />
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
