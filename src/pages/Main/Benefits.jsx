import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/images/benefits.webp";
import ButtonMore from "../../components/ButtonMore";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <Box component="section" p="118px 0 152px" backgroundColor="#FFFFFF">
      <Container maxWidth="lg">
        <Typography variant="h3" mb="47px" fontWeight="bold">
          <span className="primary">FOODLAND</span> — Ваш путеводитель в области
          сырья и ингредиентов для пищевой промышленности
        </Typography>
        <Grid container spacing={1.5}>
          <Grid item minHeight="100%" xs={5}>
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
                  fontWeight="bold"
                  mb={5.5}
                  lineHeight="123%"
                  variant="h6"
                >
                  Мы гордимся долгосрочными и крепкими отношениями с нашими
                  партнёрами и активно развиваем новые.
                </Typography>
                <Typography
                  fontWeight="regular"
                  lineHeight="140%"
                  variant="subtitle1"
                >
                  &#8212; Мы предлагаем вам не росто сырье, а экспертность и
                  индивидуальный подход: всегда готовы помочь найти
                  альтернативу, закрыть срочную потребность или предложить
                  уникальное решение.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box position="relative">
              <img
                src={img}
                width="100%"
                height="503px"
                alt="Повар накладывает орешки в формочки"
              />
              <Link to="/about-us">
                <ButtonMore
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    right: 30,
                    border: "1px solid #B4B4B4",
                  }}
                  txt="Читать далее"
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
