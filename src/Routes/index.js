import { Route, Routes } from "react-router-dom";
import Login from "Components/Login"
const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default IndexRoutes;
