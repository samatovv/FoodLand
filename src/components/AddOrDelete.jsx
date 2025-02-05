import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
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

  const updateCart = (newCount) => {
    let newItem = cart?.find((item) => item?.id === id);
    let updatedCart = cart.filter((item) => item?.id !== id);
    const updatedItem = {
      ...newItem,
      count: newCount,
      sum: parseInt(price) * newCount,
    };
    localStorage.setItem("cart", JSON.stringify([...updatedCart, updatedItem]));
    setCart([...updatedCart, updatedItem]);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    if (value === "") {
      setCount("");
      return;
    }
    value = Math.max(1, parseInt(value) || 1);
    setCount(value);
    if (cartPage) updateCart(value);
  };

  const add = () => {
    const newCount = parseInt(count) + 1;
    setCount(newCount);
    if (cartPage) updateCart(newCount);
  };

  const deleteHandler = () => {
    if (count > 1) {
      const newCount = parseInt(count) - 1;
      setCount(newCount);
      if (cartPage) updateCart(newCount);
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
      <input
        value={count}
        onChange={handleChange}
        style={{ textAlign: "center", minWidth: "25px",maxWidth:"50px", outline: "none", background: "none", border: "none" }}
        inputProps={{
          style: { textAlign: "center", width: "30px" },
          min: 1,
          type: "number",
        }}
        variant="standard"
      />
      <IconButton onClick={add}>
        <Dec />
      </IconButton>
    </Box>
  );
};

export default AddOrDelete;
