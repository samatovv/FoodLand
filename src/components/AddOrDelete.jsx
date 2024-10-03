import { Box, IconButton } from "@mui/material";
import React from "react";
import Inc from "../assets/images/Inc";
import Dec from "../assets/images/Dec";

const AddOrDelete = ({
  width,
  count,
  setCount,
  id,
  setCart,
  price,
  cartPage,
}) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const add = () => {
    if (cart?.length) {
      if (cartPage) {
        let newItem = cart?.find((item) => item.id === id);
        let updatedCart = cart.filter((item) => item.id !== id);

        setCart([
          ...updatedCart,
          { ...newItem, count: count + 1, sum: count + 1 * price },
        ]);

        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...updatedCart,
            { ...newItem, count: count + 1, sum: count + 1 * price },
          ])
        );
      }
    }
    if (!cartPage) setCount(count + 1);
  };

  const deleteHandler = () => {
    if (count > 1) {
      if (!cartPage) setCount(count - 1);
      else {
        let newItem = cart?.find((item) => item.id === id);
        let updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...updatedCart,
            { ...newItem, count: count - 1, sum: count - 1 * price },
          ])
        );
        setCart([
          ...updatedCart,
          { ...newItem, count: count - 1, sum: count - 1 * price },
        ]);
      }
    }
  };

  return (
    <Box
      p="4px"
      maxWidth={width}
      border="1px solid #EEEEEE"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="1000px"
      sx={{ "& button": { padding: 0 } }}
    >
      <IconButton onClick={deleteHandler}>
        <Inc />
      </IconButton>
      <Box component="span" m="0 12px">
        {count}
      </Box>
      <IconButton onClick={add}>
        <Dec />
      </IconButton>
    </Box>
  );
};

export default AddOrDelete;
