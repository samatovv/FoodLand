import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Route, Routes, useLocation } from "react-router";
import Site from "./routers/Site";
import { useEffect } from "react";
import Profile from "./routers/Profile";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<Site />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
