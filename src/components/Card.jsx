import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOrDelete from "./AddOrDelete";
import AddToCart from "./AddToCart";
import empty from "../assets/images/emptyCart.svg";

const Card = ({ item, search }) => {
  const details = search ? item?.product : item;
  const [count, setCount] = useState(1);
  const id = item?.id;
  return (
    <Box
      sx={{
        "&:hover img": {
          transform: "scale(1.3)",
        },
      }}
      p={search && { xs: "8px", md: "15px" }}
      maxWidth={{ xs: "unset", md: 290 }}
      backgroundColor="#FFF"
      borderRadius={3}
    >
      <Link
        to={`/catalog/details/${details?.id ?details?.id:details?._id}`}
        style={{ overflow: "hidden", display: "block", borderRadius: "12px" }}
      >
        <Box
          component="img"
          src={
            Array.isArray(details?.images) && !details?.images[0]?.url
              ? empty
              : Array.isArray(details?.images) && details?.images[0]?.url
          }
          sx={{
            borderRadius: "12px",
            height: { xs: 142, md: 178 },
            objectFit: "scale-down",
            transition: "all 800ms ease",
          }}
          width="100%"
          alt=""
        />
      </Link>
      <Link to={`/catalog/details/${details?.id}`}>
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
          {details?.name}
        </Typography>
      </Link>
      <Typography mt={0.5} mb={1} color="#797979" variant="body2">
        Вес : {details?.weight} кг
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        justifyContent="space-between"
      >
        <Typography fontWeight={700} variant="h5">
          {details?.price} c
        </Typography>
        <AddOrDelete
          count={count}
          setCount={setCount}
          id={item?.id}
          price={item.price}
        />
        {/* <Box
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
                strokeWidth="1.4"
                strokeLinecap="round"
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
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M18 12H6"
                stroke="#858585"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </IconButton>
        </Box> */}
      </Box>
      <AddToCart count={count} id={id} card details={details} />
    </Box>
  );
};

export default Card;
