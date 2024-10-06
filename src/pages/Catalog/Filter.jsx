import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import Categories from "./Categories";
import close from "../../assets/images/close.svg";
import { handleFilter } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({ formik, setChip }) => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.main.filter);

  return (
    <Drawer
      sx={{
        "& .MuiPaper-root": {
          p: "8px 8px 24px 15px",
          width: "80vw",
          height: "88vh",
        },
      }}
      open={filter}
      anchor="bottom"
      onClose={() => dispatch(handleFilter(false))}
    >
      <Box
        display="flex"
        mt={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={24} fontWeight={700} className="sans">
          Категории
        </Typography>
        <IconButton onClick={() => dispatch(handleFilter(false))}>
          <img src={close} alt="" />
        </IconButton>
      </Box>
      <Categories formik={formik} setChip={setChip} />
    </Drawer>
  );
};

export default Filter;
