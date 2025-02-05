import cookie from "cookie_js";
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  const user = cookie.get("foodland_token");
  return !!user || !!sessionStorage.getItem("token");
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
