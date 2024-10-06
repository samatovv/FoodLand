import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/images/benefits.webp";
import ButtonMore from "../../components/ButtonMore";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <Box
      component="section"
      p={{ xs: "56px 0", md: "118px 0 152px" }}
      backgroundColor="#FFFFFF"
    >
      <Container maxWidth="lg">
        <Typography variant="h3" mb={{ xs: 4, md: "47px" }} fontWeight="bold">
          <span className="primary">FOODLAND</span> — Ваш путеводитель в области
          сырья и ингредиентов для пищевой промышленности
        </Typography>
        <Grid2 container spacing={1.5}>
          <Grid2 minHeight="100%" size={{ xs: 12, md: 5 }}>
            <Box
              height="100%"
              backgroundColor="#879957"
              borderRadius="15px"
              color="#FFF"
              display="flex"
              flexDirection="column"
              alignItems="end"
              justifyContent="end"
            >
              <Box p="30px">
                <Typography
                  fontWeight="700"
                  mb={5.5}
                  lineHeight="123%"
                  fontSize={{ xs: 16, md: 18 }}
                  className="sans"
                >
                  Мы гордимся долгосрочными и крепкими отношениями с нашими
                  партнёрами и активно развиваем новые.
                </Typography>
                <Typography
                  fontWeight="300"
                  lineHeight="140%"
                  fontSize={{ xs: 16, md: 16 }}
                  className="sans"
                >
                  &#8212; Мы предлагаем вам не просто сырье, а экспертность и
                  индивидуальный подход: всегда готовы помочь найти
                  альтернативу, закрыть срочную потребность или предложить
                  уникальное решение.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box position="relative">
              <Box
                component="img"
                src={img}
                width="100%"
                height={{ xs: 275, md: "503px" }}
                alt="Повар накладывает орешки в формочки"
              />
              <Link to="/about-us">
                <ButtonMore
                  sx={{
                    width: 170,
                    position: "absolute",
                    bottom: 30,

                    right: 30,
                    border: "1px solid #B4B4B4",
                    "& span": {
                      fontSize: "12px!important",
                    },
                    "&:hover": {
                      border: 0,
                    },
                  }}
                  txt="Читать далее"
                />
              </Link>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Benefits;
