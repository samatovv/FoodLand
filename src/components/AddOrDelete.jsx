import { Box, IconButton } from "@mui/material";
import React from "react";
import Inc from "../assets/images/Inc";
import Dec from "../assets/images/Dec";

const AddOrDelete = ({
  width,
  padding,
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
        let newItem = cart?.find((item) => item?.id === id);
        let updatedCart = cart.filter((item) => item?.id !== id);

        setCart([
          ...updatedCart,
          {
            ...newItem,
            count: parseInt(count) + 1,
            sum: parseInt(price) * (parseInt(count) + 1),
          },
        ]);

        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...updatedCart,
            {
              ...newItem,
              count: parseInt(count) + 1,
              sum: parseInt(price) * (parseInt(count) + 1),
            },
          ])
        );
      }
    }
    if (!cartPage) setCount(count + 1);
  };

  const deleteHandler = () => {
    if (count > 1) {
      if (!cartPage) setCount(parseInt(count) - 1);
      else {
        let newItem = cart?.find((item) => item?.id === id);
        let updatedCart = cart.filter((item) => item?.id !== id);
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...updatedCart,
            {
              ...newItem,
              count: parseInt(count) - 1,
              sum: (parseInt(count) - 1) * parseInt(price),
            },
          ])
        );
        setCart([
          ...updatedCart,
          {
            ...newItem,
            count: parseInt(count) - 1,
            sum: (parseInt(count) - 1) * parseInt(price),
          },
        ]);
      }
    }
  };

  return (
    <Box
      p={padding ? padding : "4px"}
      maxWidth={width}
      width={width}
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
      <Box component="span" className="sans" m="0 12px">
        {count}
      </Box>
      <IconButton onClick={add}>
        <Dec />
      </IconButton>
    </Box>
  );
};

export default AddOrDelete;
