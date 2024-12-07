import React from "react";
import Header from "../shared/Header";
import { Route, Routes, useLocation } from "react-router";
import Main from "../pages/Main";
import News from "../pages/News";
import Footer from "../shared/Footer";
import Catalog from "../pages/Catalog";
import Details from "../pages/Details";
import AboutUs from "../pages/AboutUs";
import NewsDetails from "../pages/News/Details";
import { Box } from "@mui/material";
import WhatsApp from "../shared/WhatsApp";

const Site = ({ cart, setCart }) => {
  const location = useLocation();

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Box component="main" pt={location.pathname !== "/" ? "66px" : 0}>
        <Routes>
          <Route path="/" element={<Main setCart={setCart} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/catalog" element={<Catalog setCart={setCart} />} />
          <Route
            path="/catalog/details/:id"
            element={<Details setCart={setCart} />}
          />
        </Routes>
      </Box>
      <Footer />
      <WhatsApp />
    </>
  );
};

export default Site;
