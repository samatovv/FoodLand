import {
  Box,
  Button,
  Chip,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import img from "../../assets/images/1.webp";
import img2 from "../../assets/images/2.webp";
import Inc from "../../assets/images/Inc";
import Dec from "../../assets/images/Dec";
import Cart from "../../assets/images/Cart";
import { useFormik } from "formik";

const Details = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          p: "60px 0",
        }}
      >
        <Grid2 container spacing={4}>
          <Grid2 item size={6}>
            <Box display="flex" columnGap={3}>
              <Box
                display="flex"
                minWidth="105px"
                flexDirection="column"
                rowGap={1.5}
              >
                <img
                  width="100%"
                  height={105}
                  style={{ borderRadius: 16, objectFit: "cover" }}
                  src={img}
                  alt=""
                />
                <img
                  width="100%"
                  height={105}
                  style={{ borderRadius: 16, objectFit: "cover" }}
                  src={img2}
                  alt=""
                />
                <img
                  width="100%"
                  height={105}
                  style={{ borderRadius: 16, objectFit: "cover" }}
                  src={img}
                  alt=""
                />
              </Box>
              <img
                width="100%"
                height={417}
                style={{ borderRadius: 16, objectFit: "cover" }}
                src={img}
                alt=""
              />
            </Box>
          </Grid2>
          <Grid2 item size={6}>
            <Box
              display="flex"
              height="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <div>
                <Typography
                  variant="subtitle1"
                  mb={0.5}
                  color="var(--primary)"
                  fontWeight="700"
                >
                  Инвентарь для кондитерского дела
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  Кондитеркая насадка BX103
                </Typography>
              </div>
              <Box component="form" onSubmit={formik.handleSubmit}>
                <Box
                  display="flex"
                  sx={{
                    "& .MuiChip-root": {
                      p: "8.5px 13.5px",
                      height: 39,
                      borderRadius: 100,
                    },
                    "& .MuiChip-outlined": {
                      color: "#727272",
                      borderColor: "#E8E8E8",
                    },
                    "& .MuiChip-label": {
                      fontSize: 16,
                      p: 0,
                    },
                  }}
                  columnGap={1.5}
                >
                  <Chip label="BX103" color="primary" />
                  <Chip label="BX104" variant="outlined" />
                  <Chip label="BX10S" variant="outlined" />
                  <Chip label="BS" variant="outlined" />
                </Box>
                <Box width="50%">
                  <Box
                    mt={4}
                    mb={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h3" fontWeight="600">
                      550c
                    </Typography>
                    <Box
                      p="8px 13px"
                      border="1px solid #EEEEEE"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      borderRadius="1000px"
                      width="40%"
                      sx={{ "& button": { padding: 0 } }}
                    >
                      <IconButton>
                        <Inc />
                      </IconButton>
                      <Box component="span" m="0 12px">
                        1
                      </Box>
                      <IconButton>
                        <Dec />
                      </IconButton>
                    </Box>
                  </Box>
                  <Button fullWidth variant="contained" color="primary">
                    <Cart />В корзину
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
        <Typography
          variant="h5"
          mb={1}
          mt={3}
          fontWeight="600"
          color="var(--primary)"
        >
          Описание
        </Typography>
        <Typography
          variant="subtitle1"
          whiteSpace="pre-wrap"
          color="#767676"
          fontWeight="400"
        >
          Подходят для начинки и украшения хлебобулочных и кондитерских изделий.
          Термостабильны, хорошо переносят процесс заморозка – оттаивание. В
          наличии 2 вкуса: - Вишня - Клубника
        </Typography>
      </Container>
    </>
  );
};

export default Details;
