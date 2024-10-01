import { Box, Button } from "@mui/material";
import React from "react";

const ButtonMore = ({ txt, sx, fullWidth }) => {
  return (
    <Button fullWidth={fullWidth && true} variant="more" sx={sx} size="none">
      <Box width="100%" display='flex' justifyContent='space-between' alignItems='center'>
        {txt}
        <svg
          width="40"
          style={{ marginLeft: 12 }}
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#6E8435" />
          <path
            d="M24.7426 15.7574C24.7426 15.4813 24.5187 15.2574 24.2426 15.2574H19.7426C19.4665 15.2574 19.2426 15.4813 19.2426 15.7574C19.2426 16.0335 19.4665 16.2574 19.7426 16.2574H23.7426V20.2574C23.7426 20.5335 23.9665 20.7574 24.2426 20.7574C24.5187 20.7574 24.7426 20.5335 24.7426 20.2574V15.7574ZM16.1109 24.5962L24.5962 16.1109L23.8891 15.4038L15.4038 23.8891L16.1109 24.5962Z"
            fill="white"
          />
        </svg>
      </Box>
    </Button>
  );
};

export default ButtonMore;
