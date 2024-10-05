import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddOrDelete from "./AddOrDelete";
import AddToCart from "./AddToCart";

const Card = ({ item, search }) => {
  const details = search ? item?.product : item;
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(null);
  const id = item?.id;
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // const clickHandler = () => {
  //   let newItem = cart?.find((item) => item?.id === id);

  //   if (cart?.length === 0 || !newItem) {
  //     localStorage.setItem(
  //       "cart",
  //       JSON.stringify([
  //         ...cart,
  //         {
  //           id: details?.id,
  //           count: count,
  //           name: details.name,
  //           img: details.images[0].url,
  //           description: details.description,
  //           sum: details.price * count,
  //           price: details.price,
  //           idx: details.customId,
  //         },
  //       ])
  //     );
  //   } else {
  //     let updatedCart = cart?.filter((item) => item?.id !== id);
  //     localStorage.setItem(
  //       "cart",
  //       JSON.stringify([
  //         ...updatedCart,
  //         {
  //           ...newItem,
  //           count: newItem?.count + count,
  //           sum: details.price * newItem?.count + count,
  //         },
  //       ])
  //     );
  //   }
  // };

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
        to={`/catalog/details/${details?.id}`}
        style={{ overflow: "hidden", display: "block", borderRadius: "12px" }}
      >
        <img
          src={Array.isArray(details?.images) && details?.images[0]?.url}
          style={{
            borderRadius: "12px",
            height: 178,
            objectFit: "cover",
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
