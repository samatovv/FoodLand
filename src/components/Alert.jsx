import { Snackbar } from "@mui/material";
import React from "react";
import { Alert as Message } from "@mui/material";
import Error from "../assets/images/Error";
import Success from "../assets/images/Success";

const Alert = ({ open, setOpen, severity, message }) => {
  return (
    <Snackbar
      sx={{
        "& .MuiAlert-root": {
          borderRadius: "49px",
          minWidth: 263,
          "&.MuiAlert-colorError": {
            backgroundColor: "#D52F31",
          },
          "&.MuiAlert-colorSuccess": {
            backgroundColor: "#18C440",
          },
          "& .MuiIconButton-root": {
            display: "none",
          },
        },
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={setOpen}
    >
      <Message
        icon={
          severity === "success" ? <Success /> : <Error fontSize="inherit" />
        }
        onClose={setOpen}
        severity={severity}
        variant="filled"
      >
        {message}
      </Message>
    </Snackbar>
  );
};

export default Alert;
