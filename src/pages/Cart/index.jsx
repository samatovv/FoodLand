import { Container, Grid2 } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFormik } from "formik";
// import { handleDrawer } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/reducers/profile";
import Success from "./Success";
import Alert from "../../components/Alert";
import Products from "./Products";
import Form from "./Form";

const Cart = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

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
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid2 container spacing={2}>
          <Grid2
            item
            size={8}
            border="1px solid #E2E2E2"
            borderRadius="15px"
            p="15px"
            maxHeight={512}
            overflow="scroll"
          >
            <Products cart={cart} setCart={setCart} />
          </Grid2>
          <Grid2
            item
            size={4}
            border="1px solid #E2E2E2"
            borderRadius="15px"
            p="15px"
          >
            <Form formik={formik} cart={cart} />
          </Grid2>
        </Grid2>
      </Container>
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
