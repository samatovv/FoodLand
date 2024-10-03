import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid2,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import img from "../../assets/images/1.webp";
import Inc from "../../assets/images/Inc";
import Dec from "../../assets/images/Dec";
import Delete from "../../assets/images/Delete";
import { useFormik } from "formik";
import { handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
    console.log(cart);
  }, []);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      deliveryType: null,
      deliveryDate: "",
      deliveryAddress: "",
      comment: "",
      products: [],
    },
    onSubmit: () => {},
  });

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid2 container spacing={2}>
          <Grid2
            item
            size={8}
            border="1px solid #E2E2E2"
            borderRadius="15px"
            p="15px"
          >
            <Box
              display="flex"
              mb={2}
              alignItems="end"
              justifyContent="space-between"
            >
              <div>
                <Typography variant="h5" fontWeight="600">
                  Товары
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight="400"
                  color="#888888"
                >
                  Общее кол-во: 15
                </Typography>
              </div>
              <Typography
                variant="subtitle2"
                color="#960000"
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Очистить корзину
              </Typography>
            </Box>
            <Box
              borderBottom="1px solid #F1F1F1"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="16px"
            >
              <Box display="flex">
                <img
                  src={img}
                  width="90px"
                  style={{ borderRadius: 12 }}
                  height="90px"
                  alt=""
                />
                <Box ml={2}>
                  <Typography variant="subtitle2" mb={2} fontWeight="600">
                    Кондитеркая насадка BX103
                  </Typography>
                  <Typography variant="body2" color="#797979">
                    инвентарь кондитерский
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                width="50%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  p="4px"
                  border="1px solid #EEEEEE"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderRadius="1000px"
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
                <Typography variant="h5" fontWeight={700}>
                  5500с
                </Typography>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
            <Box
              borderBottom="1px solid #F1F1F1"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="16px"
            >
              <Box display="flex">
                <img
                  src={img}
                  width="90px"
                  style={{ borderRadius: 12 }}
                  height="90px"
                  alt=""
                />
                <Box ml={2}>
                  <Typography variant="subtitle2" mb={2} fontWeight="600">
                    Кондитеркая насадка BX103
                  </Typography>
                  <Typography variant="body2" color="#797979">
                    инвентарь кондитерский
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                width="50%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  p="4px"
                  border="1px solid #EEEEEE"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderRadius="1000px"
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
                <Typography variant="h5" fontWeight={700}>
                  5500с
                </Typography>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
            <Box
              mt="12px"
              mb="12px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="16px"
              borderBottom="1px solid #F1F1F1"
            >
              <Box display="flex">
                <img
                  src={img}
                  width="90px"
                  style={{ borderRadius: 12 }}
                  height="90px"
                  alt=""
                />
                <Box ml={2}>
                  <Typography variant="subtitle2" mb={2} fontWeight="600">
                    Кондитеркая насадка BX103
                  </Typography>
                  <Typography variant="body2" color="#797979">
                    инвентарь кондитерский
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                width="50%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  p="4px"
                  border="1px solid #EEEEEE"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderRadius="1000px"
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
                <Typography variant="h5" fontWeight={700}>
                  5500с
                </Typography>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="16px"
              // borderBottom="1px solid #F1F1F1"
            >
              <Box display="flex">
                <img
                  src={img}
                  width="90px"
                  style={{ borderRadius: 12 }}
                  height="90px"
                  alt=""
                />
                <Box ml={2}>
                  <Typography variant="subtitle2" mb={2} fontWeight="600">
                    Кондитеркая насадка BX103
                  </Typography>
                  <Typography variant="body2" color="#797979">
                    инвентарь кондитерский
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                width="50%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  p="4px"
                  border="1px solid #EEEEEE"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderRadius="1000px"
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
                <Typography variant="h5" fontWeight={700}>
                  5500с
                </Typography>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
            {/* <Box display="flex" mt={3}>
              <Typography variant="subtitle1" fontWeight={500} color="#575757">
                Итого:
              </Typography>
              <Typography variant="h5" ml={7} fontWeight={700}>
                5500 сом
              </Typography>
            </Box> */}
          </Grid2>
          <Grid2
            item
            size={4}
            border="1px solid #E2E2E2"
            borderRadius="15px"
            p="15px"
          >
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h5" mb={2.8} fontWeight="600">
                Оформление заказа
              </Typography>
              <Box borderBottom="1px solid #DDDDDD" pb="24px" mb={3}>
                <Typography variant="subtitle2" mb={2} color="#5B5B5B">
                  Метод доставки
                </Typography>
                <RadioGroup
                  required
                  name="deliveryType"
                  value={formik.values.deliveryType}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value="delivery"
                    control={<Radio required />}
                    label="Доставка"
                  />
                  <FormControlLabel
                    value="pickup"
                    control={<Radio required />}
                    label="Самовывоз"
                  />
                </RadioGroup>
              </Box>
              <Box
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E2E2E2!important",
                  },
                }}
              >
                <Typography variant="subtitle2" mb={2} color="#5B5B5B">
                  Адрес доставки
                </Typography>
                <TextField
                  name="deliveryAddress"
                  onChange={formik.handleChange}
                  value={formik.values.deliveryAddress}
                  required
                  placeholder="Ваш адрес"
                  fullWidth
                />
                <Typography mt={2} variant="subtitle2" mb={2} color="#5B5B5B">
                  Дата доставки
                </Typography>
                <TextField
                  name="deliveryDate"
                  onChange={formik.handleChange}
                  value={formik.values.deliveryDate}
                  required
                  type="date"
                  placeholder="Ваш адрес"
                  fullWidth
                />
                <Typography mt={2} variant="subtitle2" mb={2} color="#5B5B5B">
                  Комментарии
                </Typography>
                <TextField
                  name="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  required
                  placeholder="Ваши комментарии к заказу"
                  fullWidth
                />
              </Box>
              <Box display="flex" mt={5} columnGap={1.5}>
                <Button
                  size="small"
                  variant="contained"
                  fullWidth
                  sx={{ fontSize: 10 }}
                  color="primary"
                  type="submit"
                >
                  Оформить заказ
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  fullWidth
                  onClick={() => dispatch(handleDrawer())}
                  sx={{
                    border: "1px solid #DBDBDB",
                    fontSize: 10,
                    p: "11px 29px!important",
                  }}
                  color="secondary"
                >
                  Оформить предзаказ
                </Button>
              </Box>
            </form>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default Cart;
