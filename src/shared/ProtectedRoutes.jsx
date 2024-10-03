import cookie from "cookie_js";
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  const user = cookie.get("foodland_token");
  return !!user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login/" />;
};

export default ProtectedRoutes;
