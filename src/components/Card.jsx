import { Box, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import img from "../assets/images/card.webp";
import ButtonMore from "./ButtonMore";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Box
      p={2}
      sx={{
        
        "&:hover img": {
          transform: "scale(1.3)",
        },
      }}
      maxWidth={290}
      backgroundColor="#FFF"
      borderRadius={3}
    >
      <Link
        to="/catalog/details/1"
        style={{ overflow: "hidden", display: "block", borderRadius: "12px" }}
      >
        <img
          src={img}
          style={{ borderRadius: "12px", height: 178, transition:'all 800ms ease' }}
          width="100%"
          alt=""
        />
      </Link>
      <Link to="/catalog/details/1">
        <Typography
          color="#000"
          mt={2}
          fontWeight="400"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="subtitle1"
          lineHeight={1}
        >
          Шпатель кондитерский пластиковый 254мм 50 SG250B
        </Typography>
      </Link>
      <Typography mt={0.5} mb={1} color="#797979" variant="body2">
        Вес : 150 кг
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        justifyContent="space-between"
      >
        <Typography fontWeight={700} variant="h5">
          550 c
        </Typography>
        <Box
          p="4px"
          border="1px solid #EEEEEE"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="1000px"
          sx={{ "& button": { padding: 0 } }}
        >
          <IconButton>
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#ECECEC" />
              <path
                d="M18 12H6"
                stroke="#858585"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </svg>
          </IconButton>
          <Box component="span" m="0 12px">
            1
          </Box>
          <IconButton>
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#ECECEC" />
              <path
                d="M12 6L12 18"
                stroke="#858585"
                stroke-width="1.4"
                stroke-linecap="round"
              />
              <path
                d="M18 12H6"
                stroke="#858585"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </svg>
          </IconButton>
        </Box>
      </Box>
      <ButtonMore
        fullWidth
        sx={{ border: "1px solid #F0F0F0" }}
        txt="В корзину"
      />
    </Box>
  );
};

export default Card;
