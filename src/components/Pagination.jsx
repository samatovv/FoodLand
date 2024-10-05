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
      count={products?.totalPages}
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        justifyContent: "center",
      }}
      color="primary"
    />
  );
};

export default PaginationLarge;
