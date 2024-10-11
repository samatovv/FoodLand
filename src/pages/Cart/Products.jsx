import {
  Box,
  Button,
  Collapse,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Delete from "../../assets/images/Delete";
import AddOrDelete from "../../components/AddOrDelete";
import { Link } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import empty from "../../assets/images/empty.svg";

const Products = ({ cart, setCart }) => {
  const md = useMediaQuery("(min-width:769px)");
  const [count, setCount] = useState(1);
  const deleteHandler = (id) => {
    let filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
    localStorage.setItem("cart", JSON.stringify(filtered));
  };

  return (
    <Box
      border={{ xs: "none", md: "1px solid #E2E2E2" }}
      borderRadius="15px"
      p={{ xs: "32px 0 0 0", md: "15px" }}
      maxHeight={{ xs: "70vh", md: 609 }}
      minHeight={{ xs: "unset", md: 609 }}
      overflow={!cart.length ? "auto" : "scroll"}
    >
      <Box
        display="flex"
        mb={{ xs: 5, md: 2 }}
        alignItems="end"
        justifyContent="space-between"
      >
        <div>
          <Typography fontSize={{ xs: 26, md: 20 }} fontWeight="600">
            Товары
          </Typography>
          <Typography
            className="sans"
            variant="subtitle2"
            fontWeight="400"
            color="#888888"
          >
            Общее кол-во: {!cart?.length ? 0 : cart?.length}
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          className="sans"
          color={!cart?.length ? "#666" : "#960000"}
          onClick={() => {
            localStorage.setItem("cart", "[]");
            setCart(null);
          }}
          sx={{
            cursor: !cart?.length ? "not-allowed" : "pointer",
            textDecoration: "underline",
          }}
        >
          Очистить корзину
        </Typography>
      </Box>
      {!cart?.length ? (
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <img src={empty} alt="" />
          <Typography
            mb={1}
            textAlign="center"
            fontSize={{ xs: 24 }}
            color="#808080"
            fontWeight={600}
          >
            Ваша корзина пуста
          </Typography>
          <Typography
            textAlign="center"
            maxWidth={358}
            mb="37px"
            fontSize={{ xs: 16 }}
            color="#808080"
            fontWeight={400}
          >
            Ваши сладкие шедевры ждут своего времени — добавьте ингредиенты!
          </Typography>
          <Link to="/catalog">
            <Button
              sx={{ borderRadius: 2 }}
              variant="contained"
              color="primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4L7.41421 6.58579C6.63316 7.36684 6.63317 8.63316 7.41421 9.41421L10 12"
                  stroke="#D2D2D2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Вернуться в Каталог
            </Button>
          </Link>
        </Box>
      ) : (
        <TransitionGroup>
          {cart
            .sort((a, b) => a.idx - b.idx)
            ?.map((item, idx) => (
              <Collapse key={idx}>
                <Product
                  md={md}
                  item={item}
                  deleteHandler={deleteHandler}
                  setCart={setCart}
                  cart={cart}
                  setCount={setCount}
                  count={count}
                />
              </Collapse>
            ))}
        </TransitionGroup>
      )}
    </Box>
  );
};

export default Products;

const Product = ({ item, deleteHandler, cart, setCart, md }) => (
  <Box
    borderBottom="1px solid #F1F1F1"
    display="flex"
    alignItems={{ xs: "start", md: "center" }}
    flexDirection={{ xs: "column", md: "row" }}
    justifyContent="space-between"
    p={{ xs: "0 0 20px", sm: "16px" }}
    mb={{ xs: 2.5, md: 0 }}
  >
    <Box display="flex" width={{ xs: "100%", md: "50%" }}>
      <Box
        component="img"
        src={item?.img}
        minWidth={{ xs: 80, md: "90px" }}
        width={{ xs: 80, md: "90px" }}
        sx={{ borderRadius: "12px", objectFit: "cover" }}
        height={{ xs: 80, md: "90px" }}
        alt=""
      />
      <Box
        display="flex"
        justifyContent={{ xs: "space-between" }}
        flexDirection={{ xs: "row", md: "column" }}
        width={{ xs: "100%", md: "60%" }}
        ml={{ xs: 1, md: 2 }}
      >
        <Box maxWidth="80%">
          <Typography
            className="sans"
            variant="subtitle2"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
            }}
            mb={{ xs: 1, md: 2 }}
            fontWeight="600"
          >
            {item?.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
            }}
            color="#797979"
            className="sans"
          >
            {item?.description}
          </Typography>
        </Box>
        {/* <Typography
          className="sans"
          variant="body1"
          mt={2}
          fontWeight={500}
          color="#000"
        >
          Цена: {item?.price} c
        </Typography> */}
        {!md && (
          <IconButton onClick={() => deleteHandler(item?.id)}>
            <Delete />
          </IconButton>
        )}
      </Box>
    </Box>
    <Box
      display="flex"
      width={{ xs: "100%", md: "50%" }}
      mt={{ xs: 2, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{ xs: "row-reverse", md: "row" }}
    >
      <AddOrDelete
        cart={cart}
        count={item?.count}
        id={item?.id}
        cartPage
        setCart={setCart}
        price={item?.price}
      />
      <Typography variant="h5" className="sans" fontWeight={700}>
        {item?.sum?.toFixed(2)}с
      </Typography>
      {md && (
        <IconButton onClick={() => deleteHandler(item?.id)}>
          <Delete />
        </IconButton>
      )}
    </Box>
  </Box>
);
