import { Route, Routes } from "react-router-dom";
import Login from "Components/Login";
import ForgotPassword from "Components/Login/forgotPassword";
import Register from "Components/Login/Register";
import Landing from "Components/Landing";
const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default IndexRoutes;
