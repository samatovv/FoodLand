import { Box, Button, Collapse, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Delete from "../../assets/images/Delete";
import AddOrDelete from "../../components/AddOrDelete";
import { Link } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

const Products = ({ cart, setCart }) => {
  const [count, setCount] = useState(1);
  const deleteHandler = (id) => {
    let filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
    localStorage.setItem("cart", JSON.stringify(filtered));
  };

  return (
    <>
      <Box
        display="flex"
        mb={2}
        alignItems="end"
        justifyContent="space-between"
      >
        <div>
          <Typography variant="h5" fontWeight="600">
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
          <Typography mb={3} textAlign="center" variant="h5" fontWeight={600}>
            Ваша корзина пуста :(
          </Typography>
          <Link to="/catalog">
            <Button
              sx={{ borderRadius: 2 }}
              variant="contained"
              color="primary"
            >
              Перейти в каталог
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
    </>
  );
};

export default Products;

const Product = ({ item, deleteHandler, cart, setCart, setCount, count }) => (
  <Box
    borderBottom="1px solid #F1F1F1"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    p="16px"
  >
    <Box display="flex" width="50%">
      <img
        src={item?.img}
        width="90px"
        style={{ borderRadius: 12, objectFit: "cover" }}
        height="90px"
        alt=""
      />
      <Box maxWidth="60%" ml={2}>
        <Typography
          className="sans"
          variant="subtitle2"
          mb={2}
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
        {/* <Typography
          className="sans"
          variant="body1"
          mt={2}
          fontWeight={500}
          color="#000"
        >
          Цена: {item?.price} c
        </Typography> */}
      </Box>
    </Box>
    <Box
      display="flex"
      width="50%"
      justifyContent="space-between"
      alignItems="center"
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
      <IconButton onClick={() => deleteHandler(item?.id)}>
        <Delete />
      </IconButton>
    </Box>
  </Box>
);
