import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Route, Routes, useLocation } from "react-router";
import Site from "./routers/Site";
import { useEffect, useState } from "react";
import Profile from "./routers/Profile";
import ProtectedRoutes, { useAuth } from "./shared/ProtectedRoutes";
import DrawerNav from "./shared/DrawerNav";
import { handleDrawer } from "./redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./pages/Auth";
import { getProfileData } from "./redux/reducers/profile";
import Loader from "./shared/Loader";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useAuth();

  const [cart, setCart] = useState([]);
  const [appInitialized, setAppInitialized] = useState(false);
  const loading = useSelector((state) => state.main.loading);

  useEffect(() => {
    if (!localStorage.getItem("cart")) localStorage.setItem("cart", "[]");
    if (JSON.parse(localStorage.getItem("cart")).length) setCart(true);
    else setCart(false);

    const minLoaderTime = 1500;
    const timer = setTimeout(() => {
      if (isAuth) {
        dispatch(getProfileData()).finally(() => {
          setAppInitialized(true);
        });
      } else {
        setAppInitialized(true);
      }
    }, minLoaderTime);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(handleDrawer(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      {(!appInitialized || loading) && (
        <Loader variant={!appInitialized ? "initial" : "default"} />
      )}
      <Routes>
        <Route path="/*" element={<Site cart={cart} setCart={setCart} />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile/*" element={<Profile cart={cart} setCart={setCart} />} />
        </Route>
      </Routes>
      <Auth />
      <DrawerNav />
    </ThemeProvider>
  );
}

export default App;
