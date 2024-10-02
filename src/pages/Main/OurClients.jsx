import { Box, Container, Grid2, Pagination, PaginationItem, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/client1.webp";
import img2 from "../../assets/images/client2.webp";
import img3 from "../../assets/images/client3.webp";
import img4 from "../../assets/images/client4.webp";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import ArrowForwardIcon from "../../components/ArrowForwardIcon";
import ArrowBackIcon from "../../components/ArrowBackIcon";

const OurClients = () => {
  return (
    <Box component="section" backgroundColor="#FFF" p="62px 0">
      <Container maxWidth="lg">
        <Typography variant="h2" fontWeight="700" mb={5}>
          Наши клиенты
        </Typography>
        <Grid2 container spacing={2.5}>
          <Grid2 item size={3}>
            <Box
              p="24px"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="24px"
              border="1px solid #E6E6E6"
            >
              <img src={img1} alt="" />
              <Typography
                mt={3}
                mb={1.7}
                textAlign="center"
                variant="h5"
                fontWeight="700"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                Ekoniva
              </Typography>
              <Typography
                variant="subtitle1"
                lineHeight="140%"
                textAlign="center"
                color="#666"
                mb={3}
              >
                Объявление о запуске новых вкусов шоколада или какао-порошка
              </Typography>
              <Box display="flex" alignItems="center" columnGap="12px">
                <a href="https://instagram.com">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://facebook.com">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://twiiter.com">
                  <img src={twitter} alt="" />
                </a>
              </Box>
            </Box>
          </Grid2>
          <Grid2 item size={3}>
            <Box
              p="24px"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="24px"
              border="1px solid #E6E6E6"
            >
              <img src={img2} alt="" />
              <Typography
                mt={3}
                mb={1.7}
                textAlign="center"
                variant="h5"
                fontWeight="700"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                Carma
              </Typography>
              <Typography
                variant="subtitle1"
                lineHeight="140%"
                textAlign="center"
                color="#666"
                mb={3}
              >
                Объявление о запуске новых вкусов шоколада или какао-порошка
              </Typography>
              <Box display="flex" alignItems="center" columnGap="12px">
                <a href="https://instagram.com">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://facebook.com">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://twiiter.com">
                  <img src={twitter} alt="" />
                </a>
              </Box>
            </Box>
          </Grid2>
          <Grid2 item size={3}>
            <Box
              p="24px"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="24px"
              border="1px solid #E6E6E6"
            >
              <img src={img3} alt="" />
              <Typography
                mt={3}
                mb={1.7}
                textAlign="center"
                variant="h5"
                fontWeight="700"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                Callebaut
              </Typography>
              <Typography
                variant="subtitle1"
                lineHeight="140%"
                textAlign="center"
                color="#666"
                mb={3}
              >
                Объявление о запуске новых вкусов шоколада или какао-порошка
              </Typography>
              <Box display="flex" alignItems="center" columnGap="12px">
                <a href="https://instagram.com">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://facebook.com">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://twiiter.com">
                  <img src={twitter} alt="" />
                </a>
              </Box>
            </Box>
          </Grid2>
          <Grid2 item size={3}>
            <Box
              p="24px"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="24px"
              border="1px solid #E6E6E6"
            >
              <img src={img4} alt="" />
              <Typography
                mt={3}
                mb={1.7}
                textAlign="center"
                variant="h5"
                fontWeight="700"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                Туровский молочиный комбинат
              </Typography>
              <Typography
                variant="subtitle1"
                lineHeight="140%"
                textAlign="center"
                color="#666"
                mb={3}
              >
                Объявление о запуске новых вкусов шоколада или какао-порошка
              </Typography>
              <Box display="flex" alignItems="center" columnGap="12px">
                <a href="https://instagram.com">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://facebook.com">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://twiiter.com">
                  <img src={twitter} alt="" />
                </a>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            size="large"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            count={5}
            color="primary"
          />
        </Box>{" "}
      </Container>
    </Box>
  );
};

export default OurClients;
