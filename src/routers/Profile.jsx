import React from "react";
import Header from "../shared/Header";
import { Route, Routes } from "react-router";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Profile";
import Preview from "../pages/Preview";
import { Box } from "@mui/material";

const Profile = ({ cart, setCart }) => {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Box component="main" pt="66px">
        <Routes>
          <Route path="/" element={<Dashboard setCart={setCart} />} />
          <Route path="/cart" element={<Cart setCartGlobal={setCart} />} />
        </Routes>
      </Box>
      <Preview />
    </>
  );
};

export default Profile;
