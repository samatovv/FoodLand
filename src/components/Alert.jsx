import { Snackbar } from "@mui/material";
import React from "react";
import { Alert as Message } from "@mui/material";

const Alert = ({ open, setOpen, severity, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={setOpen}>
      <Message onClose={setOpen} severity={severity} variant="filled">
        {message}
      </Message>
    </Snackbar>
  );
};

export default Alert;
