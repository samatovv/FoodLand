import React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';
import loader from "../assets/images/spinBob.svg";
import loader2 from "../assets/images/spinBob2.svg";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = ({ variant = 'default' }) => {
  const overlayStyles =
    variant === 'initial'
      ? {
          backgroundColor: '#93A27C', 
        }
      : {
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
        };

  return (
    <Box
      sx={{
        ...overlayStyles,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Box
        component="img"
        src={variant === 'initial' ? loader2 : loader}
        alt="Loading..."
        sx={{
          width: {
            xs: 50,
            md: 70,
          },
          height: {
            xs: 50,
            md: 70,
          },
          animation: `${spinAnimation} 2s linear infinite`,
        }}
      />
    </Box>
  );
};

export default Loader;
