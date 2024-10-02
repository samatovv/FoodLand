import { Box, Button } from "@mui/material";
import React from "react";

const ButtonMore = ({ txt, sx, fullWidth }) => {
  return (
    <Button
      fullWidth={fullWidth && true}
      variant="more"
      sx={sx}
      className="more"
      size="none"
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <span style={{ fontSize: 13 }}>{txt}</span>
        <Box width={40} height={40} className="round">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7431 15.7569C24.7431 15.4808 24.5192 15.2569 24.2431 15.2569L19.7431 15.2569C19.467 15.2569 19.2431 15.4808 19.2431 15.7569C19.2431 16.033 19.467 16.2569 19.7431 16.2569L23.7431 16.2569L23.7431 20.2569C23.7431 20.533 23.967 20.7569 24.2431 20.7569C24.5192 20.7569 24.7431 20.533 24.7431 20.2569L24.7431 15.7569ZM16.1114 24.5957L24.5966 16.1105L23.8895 15.4034L15.4043 23.8886L16.1114 24.5957Z"
              fill="white"
            />
          </svg>
        </Box>
      </Box>
    </Button>
  );
};

export default ButtonMore;
