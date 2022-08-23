import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "Components/Login";
import ForgotPassword from "Components/Login/forgotPassword";
import Register from "Components/Login/Register";
import Landing from "Components/Landing";
import Barbers from "Components/Barbers";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/barbers" element={<Barbers />} />
    </Routes>
  );
};

export default IndexRoutes;
