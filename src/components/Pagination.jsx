import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import ArrowBackIcon from "./ArrowBackIcon";
import ArrowForwardIcon from "./ArrowForwardIcon";

const PaginationLarge = ({ page, handleChange, products }) => {
  return (
    <Pagination
      size="large"
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
      page={page}
      onChange={handleChange}
      siblingCount={1}
      count={products?.totalPages}
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        justifyContent: "center",
        color: "#FFF",
        "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected": {
          color: "#FFF",
        },
      }}
      color="primary"
    />
  );
};

export default PaginationLarge;
