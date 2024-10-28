import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import Categories from "./Categories";
import close from "../../assets/images/close.svg";
import { handleFilter } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({
  formik,
  setPage,
  setChip,
  searchValue,
  setValueSearch,
  setParams,
  params,
  isAuth,
  chip,
  page,
}) => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.main.filter);

  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
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
      <Categories
        setPage={setPage}
        searchValue={searchValue}
        setValueSearch={setValueSearch}
        setParams={setParams}
        params={params}
        isAuth={isAuth}
        chip={chip}
        formik={formik}
        setChip={setChip}
        page={page}
      />
    </Drawer>
  );
};

export default Filter;
