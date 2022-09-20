import {
  Route,
  Routes,
  //   Navigate,
  //   Outlet,
  //   useNavigate,
  //   useLocation,
} from "react-router-dom";
import { CartPage, HomePage, LoginPage } from "../Views";

export const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/cart" element={<CartPage />} />
    </Routes>
  );
};
