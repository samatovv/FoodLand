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
import * as yup from "yup";
import dayjs from "dayjs";
import { handleLoading } from "../../redux/reducers/mainSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const md = useMediaQuery("(min-width:769px)");

  const firstUpdate = useRef(true);
  const firstUpdate2 = useRef(true);

  const createdOrder = useSelector((state) => state.profile.createdOrder);

  const now = dayjs();

  var validationSchema = yup.object().shape({
    deliveryDate: yup.string().required(),
    deliveryAddress: yup.string().required(),
  });

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      deliveryType: "delivery",
      deliveryDate: now,
      deliveryAddress: "",
      comment: "",
      products: [],
      error: false,
    },
    onSubmit: (values) => {
      let products = cart.map((item) => ({
        product: item.id,
        quantity: item.count,
      }));

      const totalWeight = cart.reduce(
        (total, amount) => total + parseInt(amount.weight),
        0
      );
      const totalPrice = cart.reduce(
        (total, amount) => total + parseInt(amount.sum),
        0
      );

      dispatch(handleLoading(true));

      dispatch(
        createOrder({
          location: "location_3",
          products: products,
          deliveryType: values.deliveryType,
          deliveryAddress: values.deliveryAddress,
          deliveryDate: values.deliveryDate,
          status: values.status,
          comment: values.comment,
          weight: totalWeight,
          price: totalPrice,
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
    dispatch(handleLoading(false));

    if (createdOrder.status == 200) {
      setOpen(true);
      if (formik.values.deliveryType === "pickup") {
        formik.resetForm();
        formik.setFieldValue("deliveryType", "pickup");
      } else {
        formik.resetForm();
      }
      localStorage.setItem("cart", "[]");
      setCart("");
      if (drawer) handleDrawer();
    } else formik.setFieldValue("error", true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdOrder]);

  useLayoutEffect(() => {
    if (firstUpdate2.current) {
      firstUpdate2.current = false;
      return;
    }

    if (formik.values.deliveryType === "pickup") {
      formik.setFieldValue("deliveryAddress", "самовывоз");
    } else {
      formik.setFieldValue("deliveryAddress", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.deliveryType]);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: { xs: 0, md: 4 } }}>
        <Grid2 container pb="24px" spacing={{ xs: 2, lg: 2 }}>
          <Grid2 size={{ xs: 12, md: 8, lg: 7.5 }}>
            <Products cart={cart} setCart={setCart} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 4.5 }}>
            {md ? (
              <Form formik={formik} cart={cart} />
            ) : (
              cart?.length !== 0 && (
                <Button
                  sx={{
                    position: "fixed",
                    bottom: 16,
                    left: 16,
                    width: "94%",
                  }}
                  onClick={handleDrawer}
                  variant="contained"
                  color="primary"
                >
                  Оформить заказ
                </Button>
              )
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
        // message={createdOrder?.data?.message}
        message="Ошибка"
        open={formik.values.error}
        severity="error"
        setOpen={() => formik.setFieldValue("error", false)}
      />
    </>
  );
};

export default Cart;
