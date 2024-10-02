import {
  Box,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Find from "../../assets/images/Find";
import Card from "../../components/Card";

const Products = () => {
  return (
    <Box component="seciton">
      <Box display="flex" mb={3.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h4" fontWeight={700}>
          Орехи
        </Typography>
        <TextField
          placeholder="Найти на Foodland..."
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Find />
                </InputAdornment>
              ),
            },
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          sx={{
            width: 318,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2",
            },
            "& input": {
              p: "14.66px 18px 14.66px 0!important",
            },
          }}
        />
      </Box>
      <Grid2 container>
        <Grid2 item size={3}>
          <Card />
        </Grid2>
				<Grid2 item size={3}>
          <Card />
        </Grid2>
				<Grid2 item size={3}>
          <Card />
        </Grid2>
				<Grid2 item size={3}>
          <Card />
        </Grid2>
				<Grid2 item size={3}>
          <Card />
        </Grid2>
				<Grid2 item size={3}>
          <Card />
        </Grid2>
				<Grid2 item size={3}>
          <Card />
        </Grid2>
				<Grid2 item size={3}>
          <Card />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Products;
