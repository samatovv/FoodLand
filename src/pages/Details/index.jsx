import {
  Box,
  Breadcrumbs,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
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
import empty from "../../assets/images/emptyCart.svg";

const Details = ({setCart}) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:768px)");

  const { id } = useParams();
  const details = useSelector((state) => state.products.details);
  const data = useSelector((state) => state.profile.data);
  const images = Array.isArray(details.images) && details.images;

  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(1);

  useEffect(() => {
    dispatch(getDetails(id));
    setPage(1);
    setImage(images[0]?.url);
  }, [id]);

  useEffect(() => {
    setImage(images[0]?.url);
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
    <Link key="1" to="/catalog">
      <Typography fontSize={{ xs: 14, md: 13 }} className="sans" key="2">
        Каталог
      </Typography>
    </Link>,
    <Typography
      fontSize={{ xs: 14, md: 13 }}
      className="sans"
      key="3"
      sx={{ color: "text.primary" }}
    >
      {details?.group}
    </Typography>,
  ];

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 5, md: "60px" },
        }}
      >
        {!md && (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        )}
        <Grid2 container mt={{ xs: 2, md: 0 }} spacing={4}>
          <Grid2 item size={{ xs: 12, sm: 6, lg: 5 }}>
            <Box>
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
                  images.map((item) => (
                    <Box
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
          <Grid2 item size={{ xs: 12, sm: 6, lg: 7 }}>
            <Box
              display="flex"
              height="100%"
              flexDirection="column"
              justifyContent="space-between"
              sx={{ height: "calc(100% - 95px)" }}
            >
              <div>
                {md && (
                  <Typography
                    className="sans"
                    variant="subtitle1"
                    mb={0.5}
                    color="var(--primary)"
                    fontWeight="700"
                  >
                    {details.group}
                  </Typography>
                )}
                <Typography className="sans" variant="h4" fontWeight={700}>
                  {details?.name}
                </Typography>
              </div>
              <Box component="form" onSubmit={formik.handleSubmit}>
                {/* <Box
                  display="flex"
                  sx={{
                    "& .MuiChip-root": {
                      p: "8.5px 13.5px",
                      height: 39,
                      borderRadius: 100,
                    },
                    "& .MuiChip-outlined": {
                      color: "#727272",
                      borderColor: "#E8E8E8",
                    },
                    "& .MuiChip-label": {
                      fontSize: 16,
                      p: 0,
                    },
                  }}
                  columnGap={1.5}
                >
                  <Chip label="BX103" color="primary" />
                  <Chip label="BX104" variant="outlined" />
                  <Chip label="BX10S" variant="outlined" />
                  <Chip label="BS" variant="outlined" />
                </Box> */}
                <Box width={{ xs: "100%", md: "50%" }}>
                  <Box
                    mt={4}
                    mb={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      className="sans"
                      fontSize={{ xs: 40, md: 48 }}
                      fontWeight="600"
                    >
                      {
                        details?.prices?.find(
                          (item) => item.price?.id === data?.price?.id
                        )?.value
                      }
                      c
                    </Typography>
                    <AddOrDelete
                      count={count}
                      setCount={setCount}
                      id={id}
                      price={details.price}
                      width={md ? "40%" : 121}
                      padding="8px 13px"
                    />
                  </Box>
                  <AddToCart count={count} id={id} details={details} />
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
        {details.description && (
          <Typography
            variant="h5"
            mb={1}
            mt={3}
            className="sans"
            fontWeight="600"
            color="var(--primary)"
          >
            Описание
          </Typography>
        )}
        <Typography
          className="sans"
          variant="subtitle1"
          whiteSpace="pre-wrap"
          color="#767676"
          fontWeight="400"
        >
          {details.description}
        </Typography>
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
