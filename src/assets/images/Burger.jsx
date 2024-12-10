import { Box } from "@mui/material";
import React from "react";

const Burger = () => {
  return (
    <Box
      component="svg"
      width="44px"
      height="44px"
      sx={{
        cursor: "pointer",
        "& rect": {
          transition: "all 0.2s ease",
        },
        "&:hover rect": {
          fill: "var(--primary)",
        },
      }}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="10" fill="white" />
      <path
        d="M13 17H31.3333"
        stroke="#373737"
        stroke-width="0.916667"
        stroke-linecap="round"
      />
      <path
        d="M13 22.2383H31.3333"
        stroke="#373737"
        stroke-width="0.916667"
        stroke-linecap="round"
      />
      <path
        d="M13 27.4766H31.3333"
        stroke="#373737"
        stroke-width="0.916667"
        stroke-linecap="round"
      />
    </Box>
  );
};

export default Burger;
