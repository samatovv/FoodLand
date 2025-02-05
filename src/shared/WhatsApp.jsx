import { Box } from "@mui/material";
import React from "react";
import whatsapp from "../assets/images/whatsapp.svg";

const WhatsApp = () => {
  return (
    <Box
      component="a"
      target="_blank"
      sx={{
        display: "block",
        position: "fixed",
        bottom: 80,
        right: 30,
        p: '16px 18px',
        borderRadius: "100%",
        zIndex: 2,
        background: "var(--primary-light)",
        transition: "all 600ms cubic-bezier(0.47, 1.64, 0.41, 0.8)",
        "&:hover": {
          p: 3,
        },
      }}
      href="https://wa.me/9960550114477"
    >
      <img src={whatsapp} width={40} height={40} alt="" />
    </Box>
  );
};

export default WhatsApp;
