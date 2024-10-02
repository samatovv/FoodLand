import React from "react";
import Header from "../shared/Header";
import { Route, Routes } from "react-router";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Profile";
import Preview from "../pages/Preview";

const Profile = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Preview />
    </div>
  );
};

export default Profile;
