import { Box, IconButton } from "@mui/material";
import React from "react";
import Inc from "../assets/images/Inc";
import Dec from "../assets/images/Dec";

const AddOrDelete = ({ width }) => {
  return (
    <Box
      p="4px"
      maxWidth={width}
      border="1px solid #EEEEEE"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="1000px"
      sx={{ "& button": { padding: 0 } }}
    >
      <IconButton>
        <Inc />
      </IconButton>
      <Box component="span" m="0 12px">
        1
      </Box>
      <IconButton>
        <Dec />
      </IconButton>
    </Box>
  );
};

export default AddOrDelete;
