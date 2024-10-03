import React from "react";
import Header from "../shared/Header";
import { Route, Routes, useLocation } from "react-router";
import Main from "../pages/Main";
import News from "../pages/News";
import Footer from "../shared/Footer";
import Catalog from "../pages/Catalog";
import Details from "../pages/Details";
import AboutUs from "../pages/AboutUs";
import { Box } from "@mui/material";
import WhatsApp from "../shared/WhatsApp";

const Site = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Box component="main" pt={location.pathname !== "/" && "66px"}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/details/:id" element={<Details />} />
        </Routes>
      </Box>
      <Footer />
      <WhatsApp />
    </>
  );
};

export default Site;
