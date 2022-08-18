import { Route, Routes } from "react-router-dom";
import Login from "Components/Login";
import ForgotPassword from "Components/Login/forgotPassword";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default IndexRoutes;
