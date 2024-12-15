import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/user/Signup";
import Login from "../pages/user/Login";
import Home from "../pages/user/Home";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default UserRoute;
