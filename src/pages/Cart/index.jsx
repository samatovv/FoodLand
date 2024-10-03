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
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import img from "../../assets/images/1.webp";
import Inc from "../../assets/images/Inc";
import Dec from "../../assets/images/Dec";
import Delete from "../../assets/images/Delete";
import { useFormik } from "formik";
import { handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import AddOrDelete from "../../components/AddOrDelete";
import { Link } from "react-router-dom";
import { createOrder } from "../../redux/reducers/profile";

const Cart = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const firstUpdate = useRef(true);

  const createdOrder = useSelector((state) => state.profile.createdOrder);

  const formik = useFormik({
    initialValues: {
      deliveryType: null,
      deliveryDate: "",
      deliveryAddress: "",
      comment: "",
      products: [],
    },
    onSubmit: (values, { resetForm }) => {
      let products = cart.map((item) => ({
        product: item.id,
        quantity: item.count,
      }));

      dispatch(
        createOrder({
          location: "location_3",
          products: products,
          deliveryType: values.deliveryType,
          deliveryAddress: values.deliveryAddress,
          deliveryDate: values.deliveryDate,
          comment: values.comment,
          weight: 1,
          price: 1,
        })
      );
    },
  });

  const deleteHandler = (id) => {
    let filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
    localStorage.setItem("cart", JSON.stringify(filtered));
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (createdOrder.status == 200) {
      alert("Успешно");
      formik.resetForm();
      localStorage.setItem("cart", "[]");
      setCart("");
    } else alert(createdOrder.data.message);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdOrder]);

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
                  Общее кол-во: {!cart?.length ? 0 : cart?.length}
                </Typography>
              </div>
              <Typography
                variant="subtitle2"
                color={!cart?.length ? "#666" : "#960000"}
                onClick={() => {
                  localStorage.setItem("cart", "[]");
                  setCart(null);
                }}
                sx={{
                  cursor: !cart?.length ? "not-allowed" : "pointer",
                  textDecoration: "underline",
                }}
              >
                Очистить корзину
              </Typography>
            </Box>
            {!cart?.length ? (
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography
                  mb={3}
                  textAlign="center"
                  variant="h5"
                  fontWeight={600}
                >
                  Ваша корзина пуста :(
                </Typography>
                <Link to="/catalog">
                  <Button
                    sx={{ borderRadius: 2 }}
                    variant="contained"
                    color="primary"
                  >
                    Перейти в каталог
                  </Button>
                </Link>
              </Box>
            ) : (
              cart
                .sort((a, b) => a.idx - b.idx)
                .map((item) => (
                  <Box
                    borderBottom="1px solid #F1F1F1"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p="16px"
                  >
                    <Box display="flex">
                      <img
                        src={item.img}
                        width="90px"
                        style={{ borderRadius: 12, objectFit: "cover" }}
                        height="90px"
                        alt=""
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle2" mb={2} fontWeight="600">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="#797979">
                          {item.description}
                        </Typography>
                        <Typography
                          variant="body1"
                          mt={2}
                          fontWeight={500}
                          color="#000"
                        >
                          Цена: {item.price} c
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      width="50%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <AddOrDelete
                        cart={cart}
                        count={item.count}
                        id={item.id}
                        cartPage
                        setCart={setCart}
                        price={item.price}
                      />
                      {/* <Box
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
                      {item.count}
                    </Box>
                    <IconButton>
                      <Dec />
                    </IconButton>
                  </Box> */}
                      <Typography variant="h5" fontWeight={700}>
                        {item.sum}с
                      </Typography>
                      <IconButton onClick={() => deleteHandler(item.id)}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </Box>
                ))
            )}
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
                {formik.values.deliveryType === "delivery" && (
                  <>
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
                    <Typography
                      mt={2}
                      variant="subtitle2"
                      mb={2}
                      color="#5B5B5B"
                    >
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
                  </>
                )}

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
                  disabled={!cart.length}
                  sx={{ fontSize: 10 }}
                  color="primary"
                  type="submit"
                >
                  Оформить заказ
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  disabled={!cart.length}
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
