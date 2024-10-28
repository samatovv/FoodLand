import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Route, Routes, useLocation } from "react-router";
import Site from "./routers/Site";
import { useEffect } from "react";
import Profile from "./routers/Profile";
import ProtectedRoutes, { useAuth } from "./shared/ProtectedRoutes";
import DrawerNav from "./shared/DrawerNav";
import { handleDrawer } from "./redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./pages/Auth";
import { LinearProgress } from "@mui/material";
import { getProfileData } from "./redux/reducers/profile";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useAuth;

  const loading = useSelector((state) => state.main.loading);
  const data = useSelector((state) => state.profile.data);

  useEffect(() => {
    if (!localStorage.getItem("cart")) localStorage.setItem("cart", "[]");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(handleDrawer(false));
    if (isAuth) dispatch(getProfileData());
    if (data.status === 401) sessionStorage.clear();
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <LinearProgress
          color="primary"
          sx={{ width: "100%", position: "fixed", top: 0, zIndex: 1301 }}
        />
      )}
      <Routes>
        <Route path="/*" element={<Site />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile/*" element={<Profile />} />
        </Route>
      </Routes>
      <Auth />
      <DrawerNav />
    </ThemeProvider>
  );
}

export default App;
