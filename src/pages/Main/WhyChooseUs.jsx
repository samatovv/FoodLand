import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import star from "../../assets/images/star.svg";
import shield from "../../assets/images/shield.svg";
import img1 from "../../assets/images/why.webp";
import img2 from "../../assets/images/why2.webp";

const WhyChooseUs = () => {
  return (
    <Box component="section" p="43px 0 106px" backgroundColor="#FFF">
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: " column",
              justifyContent: " space-between",
              alignItems: " self-end",
            }}
          >
            <Typography
              maxWidth={482}
              mt={13.5}
              variant="h2"
              fontWeight="bold"
              lineHeight="120%"
              mr="100px"
            >
              Почему выбирают нас
            </Typography>
            <Box
              p="27px"
              // width="50%"
              border="1px solid #E6E6E6"
              borderLeft="none"
              borderRadius="10px"
              position="relative"
              maxHeight={350}
              maxWidth={335}
              // height={350}
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
                <Typography color="#FFF" variant="subtitle2">
                  200+ товаров
                </Typography>
              </Box>
              <img src={img2} width="100%" height="290.95px" alt="Мука" />
            </Box>
          </Grid>
          <Grid item container xs={6}>
            <Grid
              item
              xs={6}
              p="27px"
              backgroundColor="#FCFCF1"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
            >
              <Typography variant="h4" mb={4.6} maxWidth={276} fontWeight="600">
                Нам можно доверять.
              </Typography>
              <Typography variant="body1" mb={12} color="#707070">
                Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб помочь
                нашим клиентам становиться ещё лучше
              </Typography>
              <img src={star} alt="" />
            </Grid>
            <Grid
              item
              xs={6}
              p="27px"
              width="50%"
              border="1px solid #E6E6E6"
              borderRight="none"
              borderRadius="10px"
              // sx={{ borderTopLeftRadius: "0px 0px!important" }}
              position="relative"
              maxHeight={350}
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
                <Typography color="#FFF" variant="subtitle2">
                  c 2018 года
                </Typography>
              </Box>
              <img src={img1} width="100%" height="100%" alt="Мука" />
            </Grid>
            <Grid
              item
              xs={6}
              p="27px"
              backgroundColor="#FFF5E8"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
            >
              <Typography variant="h4" mb={4.6} maxWidth={276} fontWeight="600">
                Экспертность{" "}
              </Typography>
              <Typography variant="body1" mb={12} color="#707070">
                Наша экспертность в сфере применения кондитерского сырья.
                Возможность предоставления технологической поддержки.
              </Typography>
              <img src={shield} alt="" />
            </Grid>
            <Grid
              item
              xs={6}
              p="27px"
              backgroundColor="#FCFCF1"
              border="1px solid #E6E6E6"
              borderRadius="10px"
              maxHeight={350}
            >
              <Typography
                variant="h4"
                mb="34px"
                maxWidth={276}
                fontWeight="600"
              >
                Гарантия качества
              </Typography>

              <Typography fontSize={11} mb="33px" color="#707070">
                Высокий уровень поставляемых услуг
              </Typography>
              <Typography variant="body1" mb="31px" color="#707070">
                Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб помочь
                нашим клиентам становиться ещё лучше
              </Typography>
              <img src={star} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
