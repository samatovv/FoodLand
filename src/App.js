import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Route, Routes } from "react-router";
import Site from "./routers/Site";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<Site />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
