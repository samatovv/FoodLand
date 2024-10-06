import { Drawer } from "@mui/material";
import React from "react";
import Form from "./Form";

const FormDrawer = ({ handleDrawer, drawer, formik, cart }) => {
  return (
    <Drawer
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "24px 24px 0 0",
        },
      }}
      open={drawer}
      anchor="bottom"
      onClose={handleDrawer}
    >
      <Form formik={formik} cart={cart} />
    </Drawer>
  );
};

export default FormDrawer;
