import React from "react";
import Header from "../shared/Header";
import { Route, Routes } from "react-router";
import Main from "../pages/Main";
import News from "../pages/News";
import Footer from "../shared/Footer";

const Site = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Site;
