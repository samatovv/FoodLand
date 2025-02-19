import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOrDelete from "./AddOrDelete";
import AddToCart from "./AddToCart";
import empty from "../assets/images/empty.svg";
import { useSelector } from "react-redux";
import { useAuth } from "../shared/ProtectedRoutes";
import { translit } from "../hooks/translit";

const Card = ({ item, search, width, setCart, preview }) => {
  const data = useSelector((state) => state.profile.data);

  const isAuth = useAuth();

  const [inCart, setInCart] = useState(null);

  const details = search ? item?.product : item;
  const category =
    Array.isArray(details?.category) && details?.category[0]
      ? details?.category[0]?.name
      : details?.category?.name;
  const [count, setCount] = useState(1);
  const id = item?._id ? item?._id : item?.product?.id;
  return (
    <Box
      sx={{
        "&:hover": {
          background: search ? "#E4E9DD" : "#EDEDED70",
          transition: "all 0.2s ease",
        },
      }}
      minWidth={width}
      p={{ xs: "8px", md: "14px" }}
      maxWidth={width ? width : { xs: "unset", md: 290 }}
      backgroundColor="#FFF"
      borderRadius={3}
    >
      <Link
        to={`/catalog/${translit(category)}/${translit(details?.name)}/${
          details?.id ? details?.id : details?._id
        }`}
        style={{ overflow: "hidden", display: "block", borderRadius: "12px"}}
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
            objectFit:
              Array.isArray(details?.images) && !details?.images[0]?.url
                ? "cover"
                : "contain",
            transition: "all 800ms ease",
          }}
          width="100%"
          alt=""
        />
      </Link>
      <Link
        to={`/catalog/${translit(category)}/${translit(details?.name)}/${
          details?.id ? details?.id : details?._id
        }`}
      >
        <Typography
          color="#000"
          mt={2}
          fontWeight="400"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word",
            fontFamily: "Open Sans",
            height: "32px",
            fontSize: "14px"
          }}
          variant="subtitle1"
          lineHeight={1}
        >
          {details?.name}
        </Typography>
      </Link>
      <Typography mt={0.5} mb={1} color="#797979" variant="body2">
        Вес : {details?.weight}
        {details?.unitCode}
      </Typography>
      {isAuth && (
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          justifyContent="space-between"
        >
          <Typography fontWeight={700} fontSize={{ xs: 19, md: 20 }}>
            {
              details?.prices?.find((item) =>
                item.price._id
                  ? item.price._id
                  : item.price?.id === data?.price?.id
              )?.value
            }
            c
          </Typography>
          {!preview && (
            <AddOrDelete
              count={count}
              setCount={setCount}
              id={item?.id}
              price={
                details?.prices?.find((item) =>
                  item.price._id
                    ? item.price._id
                    : (item.price?.id === data?.price?.id) === data?.price?.id
                )?.value
              }
            />
          )}
        </Box>
      )}
      {!preview && (
        <AddToCart
          setInCart={setInCart}
          inCart={inCart}
          search={search}
          setCart={setCart}
          count={count}
          id={id}
          card
          details={details}
        />
      )}
    </Box>
  );
};

export default Card;
