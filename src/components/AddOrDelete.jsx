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
  const updateCart = (delta) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find((item) => item?.id === id);
    if (!existingItem) return;
    
    const newCount = existingItem.count + delta;
    if (newCount < 1) return;

    existingItem.count = newCount;
    existingItem.sum = parseInt(price) * newCount;
    cart = cart.map((item) => (item.id === id ? existingItem : item));

    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof setCart === "function") {
      setCart(cart);
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    if (value === "") {
      setCount("");
      return;
    }
    value = Math.max(1, parseInt(value) || 1);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find((item) => item?.id === id);
    if (existingItem) {
      const delta = value - existingItem.count;
      setCount(value);
      updateCart(delta);
    } else {
      setCount(value);
    }
  };

  const add = () => {
    setCount(count + 1);
    updateCart(1);
  };

  const deleteHandler = () => {
    if (count > 1) {
      setCount(count - 1);
      updateCart(-1);
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
        style={{
          textAlign: "center",
          minWidth: "25px",
          maxWidth: "50px",
          outline: "none",
          background: "none",
          border: "none",
        }}
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
