import { Pagination, PaginationItem, useMediaQuery } from "@mui/material";
import React from "react";
import ArrowBackIcon from "./ArrowBackIcon";
import ArrowForwardIcon from "./ArrowForwardIcon";

const PaginationLarge = ({ page, handleChange, products }) => {
  const md = useMediaQuery("(min-width:900px)");

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
      siblingCount={md ? 1 : 0}
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
