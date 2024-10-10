import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Route, Routes, useLocation } from "react-router";
import Site from "./routers/Site";
import { useEffect } from "react";
import Profile from "./routers/Profile";
import ProtectedRoutes from "./shared/ProtectedRoutes";
import DrawerNav from "./shared/DrawerNav";
import { handleDrawer } from "./redux/reducers/mainSlice";
import { useDispatch } from "react-redux";
import Auth from "./pages/Auth";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("cart")) localStorage.setItem("cart", "[]");
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(handleDrawer(false));
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
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
