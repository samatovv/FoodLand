import { Box, IconButton } from "@mui/material";
import React from "react";
import Inc from "../assets/images/Inc";
import Dec from "../assets/images/Dec";

const AddOrDelete = ({ width, count, setCount }) => {
  const add = () => {
    setCount(count + 1);
  };
  const deleteHandler = () => {
    if (count > 1) setCount(count - 1);
  };
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
      <IconButton onClick={deleteHandler}>
        <Inc />
      </IconButton>
      <Box component="span" m="0 12px">
        {count}
      </Box>
      <IconButton onClick={add}>
        <Dec />
      </IconButton>
    </Box>
  );
};

export default AddOrDelete;
