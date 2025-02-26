import {
  Box,
  Button,
  Collapse,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Delete from "../../assets/images/Delete";
import AddOrDelete from "../../components/AddOrDelete";
import { Link } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import emptyImg from "../../assets/images/empty.svg";
import empty from "../../assets/images/empty-no-bg.svg";

const Products = ({ cart, setCart, setCartGlobal }) => {
  const md = useMediaQuery("(min-width:769px)");
  const [count, setCount] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const deleteHandler = (id) => {
    let filtered = cart.filter((item) => item?.id !== id);
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
      height={{ xs: "auto", md: "100%" }}
      overflow={!cart?.length ? "hidden" : "scroll"}
    >
      <Box
        display="flex"
        mb={{ xs: 5, md: 2 }}
        alignItems="end"
        justifyContent="space-between"
      >
        <div>
          <Typography className="sans" fontSize={{ xs: 26, md: 25 }} fontWeight="600">
            Товары
          </Typography>
          <Typography
            className="sans"
            fontSize={15}
            fontWeight="400"
            color="#888888"
          >
            Общее кол-во: {!cart?.length ? 0 : cart?.length}
          </Typography>
        </div>
        <Typography
          fontSize={15}
          className="sans"
          color={!cart?.length ? "#666" : "#960000"}
          onClick={() => {
            localStorage.setItem("cart", "[]");
            setCart(null);
            setCartGlobal(false);
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
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="100%"
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
              sx={{ borderRadius: "44px", p: "16px 50px!important" }}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Вернуться в Каталог
            </Button>
          </Link>
        </Box>
      ) : (
        <TransitionGroup>
          {cart
            .sort((a, b) => a?.idx - b?.idx)
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
            {isMobile && (
              <Box
                display="flex"
                justifyContent="space-between"
                mt={2}
                alignItems="baseline"
              >
                <Typography className="sans" fontSize={25} fontWeight="700">
                  Итого:
                </Typography>
                <Typography fontSize={25} fontWeight="700">
                  {cart &&
                    cart?.reduce(
                      (total, amount) => total + parseInt(amount.sum),
                      0
                    )}{" "}
                  c
                </Typography>
              </Box>
            )}
        </TransitionGroup>
      )}
    </Box>
  );
};

export default Products;

const Product = ({
  item,
  deleteHandler,
  cart,
  setCart,
  md,
  setCount,
}) => (
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
        src={item?.img ? item?.img : emptyImg}
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
        <Box
          maxWidth="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            className="sans"
            variant="subtitle2"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
              lineHeight: "19.07px",
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
            fontWeight={600}
            color="#797979"
            className="sans"
          >
            {item?.category}
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
        setCount={setCount}
        cartPage
        setCart={setCart}
        price={item?.price}
      />
      <Typography fontSize={18} className="sans" fontWeight={700}>
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
