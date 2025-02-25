import React from "react";
import Box from "@mui/material/Box";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        width: {xs:"92%",sm:"93%",md:"95%",lg:"100%",},
        maxWidth: "1323px",
        mx: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
