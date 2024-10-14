import { Button } from "@mui/material";
import React, { useState } from "react";
import Cart from "../assets/images/Cart";
import ButtonMore from "./ButtonMore";
import InCart from "../assets/images/InCart";
import { useAuth } from "../shared/ProtectedRoutes";
import { handleAuthDialog } from "../redux/reducers/mainSlice";
import { useDispatch } from "react-redux";

const AddToCart = ({ details, count, id, card }) => {
  const dispatch = useDispatch();
  const isAuth = useAuth();

  const [inCart, setInCart] = useState(null);

  const clickHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newItem = cart?.find((item) => item.id === id);
    if (isAuth) {
      setInCart(true);
      if (!newItem) {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("cart")),
            {
              id: details.id,
              count: count,
              name: details.name,
              img: details.images[0].url,
              description: details.description,
              sum: details.price * count,
              price: details.price,
              idx: details.customId,
            },
          ])
        );
      } else {
        let updatedCart = cart?.filter((item) => item.id !== id);
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...updatedCart,
            {
              ...newItem,
              count: newItem?.count + count,
              sum: details.price * newItem?.count + count,
            },
          ])
        );
      }
    } else dispatch(handleAuthDialog(true));
  };

  return (
    <>
      {!card ? (
        <Button
          onClick={clickHandler}
          fullWidth
          disabled={inCart}
          sx={{
            position: "relative",
            "&.Mui-disabled": {
              background: "transparent",
              color: "#000",
              border: "1px solid #F0F0F0",
            },
          }}
          variant="contained"
          color="primary"
          className="button_incart"
        >
          <Cart />
          <span className={inCart ? "cart_txt in_cart_txt" : "cart_txt"}>
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
