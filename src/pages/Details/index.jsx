import {
  Box,
  Breadcrumbs,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Recomendations from "./Recomendations";
import { getDetails } from "../../redux/reducers/products";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import AddOrDelete from "../../components/AddOrDelete";
import AddToCart from "../../components/AddToCart";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import empty from "../../assets/images/empty.svg";
import { useAuth } from "../../shared/ProtectedRoutes";

const Details = ({ setCart }) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:768px)");

  const isAuth = useAuth();

  const { id } = useParams();
  const details = useSelector((state) => state.products.details);
  const data = useSelector((state) => state.profile.data);
  const images = Array.isArray(details.images) && details.images;

  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(1);
  const [inCart, setInCart] = useState(null);

  useEffect(() => {
    dispatch(getDetails(id));
    setPage(1);
    setImage(images[0]?.url);
    setInCart(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setImage(images[0]?.url);
    setCount(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  const breadcrumbs = [
    <Link key="1" to="/">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans">
        Главная
      </Typography>
    </Link>,
    <Link key="2" to="/catalog">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans">
        Каталог
      </Typography>
    </Link>,
    <Link
      key="3"
      to={`/catalog/?search=&categoryIds=${details?.category?.parent?.parent?.id}&page=1`}
    >
      <Typography
        fontSize={{ xs: 14, md: 13 }}
        className="sans"
        sx={{ color: "text.primary" }}
      >
        {details?.category?.parent?.parent?.name}
      </Typography>
    </Link>,
    <Link
      key="4"
      to={
        details?.category?.parent?.id
          ? `/catalog/?search=&categoryIds=${details?.category?.parent?.id}&page=1`
          : "#"
      }
    >
      <Typography
        fontSize={{ xs: 14, md: 13 }}
        className="sans"
        sx={{ color: "text.primary" }}
      >
        {details?.category?.parent?.name || "Неизвестная категория"}
      </Typography>
    </Link>,
    <Link
      key="5"
      to={
        details?.category?.id
          ? `/catalog/?search=&categoryIds=${details?.category?.id}&page=1`
          : "#"
      }
    >
      <Typography
        fontSize={{ xs: 14, md: 13 }}
        className="sans"
        sx={{ color: "text.primary" }}
      >
        {details?.category?.name}
      </Typography>
    </Link>,
  ];

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 5, md: "60px" },
        }}
      >
        {md && (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        )}
        <Grid2 container mt={{ xs: 2, md: 3 }} spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6, lg: 5 }}>
            <Box>
              {!md ? (
                !details?.name ? (
                  <Skeleton
                    variant="rect"
                    sx={{
                      borderRadius: "10px",
                    }}
                    width="100%"
                    height={40}
                  />
                ) : (
                  <Typography className="sans" variant="h4" fontWeight={600}>
                    {details?.name}
                  </Typography>
                )
              ) : (
                ""
              )}
              <Box
                component="img"
                src={!images[0]?.url ? empty : image}
                width="100%"
                height={{ xs: 322, sm: "auto", md: 405 }}
                sx={{ borderRadius: 16, objectFit: "scale-down" }}
                alt=""
              />
              <Box display="flex" mt={2} columnGap={2}>
                {images?.length > 1 &&
                  images.map((item, idx) => (
                    <Box
                      key={idx}
                      component="img"
                      width={75}
                      onClick={() => setImage(item?.url)}
                      height={75}
                      sx={{
                        borderRadius: 2,
                        objectFit: "cover",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                      src={item?.url}
                      alt=""
                    />
                  ))}
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, lg: 7 }}>
            <Box
              display="flex"
              height="100%"
              flexDirection="column"
              justifyContent="space-between"
              sx={{ height: "calc(100% - 95px)" }}
            >
              <div>
                {md &&
                  (!details?.category?.name ? (
                    <Skeleton
                      variant="rect"
                      sx={{
                        borderRadius: "10px",
                        mb: 2,
                      }}
                      width="70%"
                      height={40}
                    />
                  ) : (
                    <Typography
                      className="sans"
                      fontSize={16}
                      mb={0.5}
                      color="var(--primary)"
                      fontWeight="400"
                    >
                      {details?.category?.name}
                    </Typography>
                  ))}
                {md ? (
                  !details?.name ? (
                    <Skeleton
                      variant="rect"
                      sx={{
                        borderRadius: "10px",
                      }}
                      width="100%"
                      height={40}
                    />
                  ) : (
                    <Typography className="sans" variant="h4" fontWeight={600}>
                      {details?.name}
                    </Typography>
                  )
                ) : (
                  ""
                )}
                <Box
                  sx={{ marginTop: "15px", }}
                >
                  {details.description && (
                    <Typography
                      fontSize={20}
                      mb={1}
                      mt={4}
                      className="sans"
                      fontWeight="600"
                      color="var(--primary)"
                    >
                      Описание
                    </Typography>
                  )}

                  <Typography
                    className="sans"
                    fontSize={16}
                    whiteSpace="pre-wrap"
                    color="#767676"
                    mb={2}
                    fontWeight="400"
                  >
                    {details.description}
                  </Typography>
                </Box>
              </div>

              <Box component="form" onSubmit={formik.handleSubmit}>
                <Box width={{ xs: "100%", md: "45%" }}>
                  {!!isAuth && (
                    <Box
                      mt={4}
                      mb={3}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-around"
                    >
                      {!details?.prices ? (
                        <Skeleton
                          variant="rect"
                          sx={{
                            borderRadius: "10px",
                            mr: 4,
                          }}
                          width={166}
                          height={40}
                        />
                      ) : (
                        <Typography
                          className="sans"
                          fontSize={{ xs: 40, md: 40 }}
                          fontWeight="700"
                        >
                          {
                            details?.prices?.find(
                              (item) => item.price?.id === data?.price?.id
                            )?.value
                          }
                          c
                        </Typography>
                      )}
                      <AddOrDelete
                        count={count}
                        setCount={setCount}
                        id={id}
                        price={details.price}
                        width={md ? "24%" : 121}
                        padding="8px 13px"
                      />
                    </Box>
                  )}
                  <AddToCart
                    setInCart={setInCart}
                    inCart={inCart}
                    count={count}
                    setCart={setCart}
                    id={id}
                    details={details}
                  />
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>

        <Recomendations
          id={id}
          setCart={setCart}
          details={details}
          page={page}
          setPage={setPage}
        />
      </Container>
    </>
  );
};

export default Details;
