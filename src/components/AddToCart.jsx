import { Button } from "@mui/material";
import React, { useState } from "react";
import Cart from "../assets/images/Cart";
import ButtonMore from "./ButtonMore";
import InCart from "../assets/images/InCart";
import { useAuth } from "../shared/ProtectedRoutes";
import { handleAuthDialog } from "../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = ({
  details,
  count,
  id,
  card,
  setCart,
  search,
  setInCart,
  inCart,
}) => {
  const dispatch = useDispatch();
  const isAuth = useAuth();

  const data = useSelector((state) => state.profile.data);

  const clickHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newItem = cart?.find((item) => item?.id === id);

    setCart(true);
    if (inCart) {
      setInCart(false);
      let filtered = cart.filter((item) => item?.id !== id);

      if (!newItem) {
        localStorage.setItem("cart", JSON.stringify(filtered));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...filtered,
            // {
            //   ...newItem,
            //   count: newItem?.count - count,
            //   sum: details.price * (newItem?.count - count),
            //   weight: newItem?.weight - details.weight * count,
            // },
          ])
        );
      }
    } else {
      if (isAuth) {
        setInCart(true);

        if (!newItem) {
          localStorage.setItem(
            "cart",
            JSON.stringify([
              ...JSON.parse(localStorage.getItem("cart")),
              {
                id: details?.id ? details?.id : details._id,
                count: count,
                name: details.name,
                img: !!details.images ? details.images[0]?.url : null,
                description: details.description,
                category: search
                  ? details?.category?.name
                  : details?.category[0]?.name,
                sum:
                  details?.prices?.find((item) =>
                    item.price._id
                      ? item.price._id
                      : item.price?.id === data?.price?.id
                  )?.value * count,
                price: details?.prices?.find((item) =>
                  item.price._id
                    ? item.price._id
                    : item.price?.id === data?.price?.id
                )?.value,
                idx: details.customId,
                weight: details.weight * count,
              },
            ])
          );
        } else {
          let updatedCart = cart?.filter((item) => item?.id !== id);
          localStorage.setItem(
            "cart",
            JSON.stringify([
              ...updatedCart,
              {
                ...newItem,
                category: search
                  ? details?.category?.name
                  : details?.category[0]?.name,
                count: newItem?.count + count,
                sum:
                  details?.prices?.find((item) =>
                    item.price._id
                      ? item.price._id
                      : item.price?.id === data?.price?.id
                  )?.value *
                  (newItem?.count + count),
                weight: (newItem?.weight + details.weight) * count,
              },
            ])
          );
        }
      } else dispatch(handleAuthDialog(true));
    }
  };

  return (
    <>
      {!card ? (
        <Button
          onClick={clickHandler}
          fullWidth
          // disabled={inCart}
          sx={{
            height: 50,
            position: "relative",
            color: inCart ? "black" : "white",
            border: inCart ? "1px solid #666" : "",
            // "&.Mui-disabled": {
            //   background: "transparent",
            //   color: "#000",
            //   border: "1px solid #F0F0F0",
            // },
          }}
          variant="contained"
          color={inCart ? "secondary" : "primary"}
        >
          {!inCart && <Cart />}
          <span
            style={{ fontWeight: 700 }}
            className={inCart ? "cart_txt in_cart_txt" : "cart_txt"}
          >
            {inCart ? "В корзине!" : "В корзину"}
          </span>
          <InCart inCart={inCart} />
        </Button>
      ) : (
        <ButtonMore
          card
          inCart={inCart}
          onClick={clickHandler}
          fullWidth
          sx={{
            border: "1px solid #F0F0F0",

            "& .round": {
              top: 3,
            },

            "&.Mui-disabled": {
              color: "#fff!important",
            },
          }}
          txt="В корзину"
        />
      )}
    </>
  );
};

export default AddToCart;
