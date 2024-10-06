import { Button, Container, Grid2, useMediaQuery } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFormik } from "formik";
// import { handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/reducers/profile";
import Success from "./Success";
import Alert from "../../components/Alert";
import Products from "./Products";
import Form from "./Form";
import ButtonMore from "../../components/ButtonMore";
import FormDrawer from "./FormDrawer";

const Cart = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const md = useMediaQuery("(min-width:769px)");

  const firstUpdate = useRef(true);

  const createdOrder = useSelector((state) => state.profile.createdOrder);

  const formik = useFormik({
    initialValues: {
      deliveryType: null,
      deliveryDate: "",
      deliveryAddress: "",
      comment: "",
      products: [],
      error: false,
    },
    onSubmit: (values) => {
      console.log(cart);

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
          status: values.status,
          comment: values.comment,
          weight: 1,
          price: 1,
        })
      );
    },
  });

  const handleDrawer = () => setDrawer(!drawer);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (createdOrder.status == 200) {
      setOpen(true);
      formik.resetForm();
      localStorage.setItem("cart", "[]");
      setCart("");
    } else formik.setFieldValue("error", true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdOrder]);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: { xs: 0, md: 4 } }}>
        <Grid2 container pb="24px" spacing={{ xs: 2, lg: 2 }}>
          <Grid2 size={{ xs: 12, md: 8, lg: 8 }}>
            <Products cart={cart} setCart={setCart} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            {md ? (
              <Form formik={formik} cart={cart} />
            ) : (
              <Button
                fullWidth
                onClick={handleDrawer}
                variant="contained"
                color="primary"
              >
                Оформить заказ
              </Button>
            )}
          </Grid2>
        </Grid2>
      </Container>
      <FormDrawer
        formik={formik}
        cart={cart}
        drawer={drawer}
        handleDrawer={handleDrawer}
      />
      <Success open={open} setOpen={setOpen} />
      <Alert
        message={createdOrder?.data?.message}
        open={formik.values.error}
        severity="error"
        setOpen={() => formik.setFieldValue("error", false)}
      />
    </>
  );
};

export default Cart;
