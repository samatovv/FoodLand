/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Chip,
  Grid2,
  IconButton,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import {
  getProd,
  getProducts,
  setProducts,
  setSearch,
} from "../../redux/reducers/products";
import filter from "../../assets/images/filter.svg";
import empty from "../../assets/images/empty-no-bg.svg";
import { handleFilter, handleLoading } from "../../redux/reducers/mainSlice";
import PaginationLarge from "../../components/Pagination";
import Search from "./Search";

const Products = ({
  setCart,
  setCategory,
  chip,
  setChip,
  params,
  setParams,
  searchValue,
  category,
  setValueSearch,
  page,
  setPage,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const md = useMediaQuery("(min-width:900px)");

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.main.loading);
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const firstUpdate = useRef(true);
  const firstUpdate2 = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 200); 
  
    return () => clearTimeout(timer);
  }, []);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (products.products)
      setTimeout(() => dispatch(handleLoading(false)), 500);
  }, [products]);  

  const handleDelete = (item) => {
    setPage(1);
    setChip(chip.filter((el) => el !== item));
    setParams(params.filter((el) => el.name !== item));
    if (page === 1)
      dispatch(
    getProducts(
      `/products/query?limit=12&page=1&search=${encodeURI(
        searchValue
      )}&categoryIds=${params
        .filter((el) => el.name !== item)
        .map((item) => item.id)}`
      )
    );
  };
  
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(handleLoading(true));
    dispatch(setProducts([]));
    navigate(
      `/catalog/?search=${
        location.search.split("&")[0].split("=")[1]
        ? decodeURI(location.search.split("&")[0].split("=")[1])
        : ""
      }&categoryIds=&page=${value}`
    );
  };
  useEffect(() => {
      dispatch(getProducts(`/products/query?limit=12&page=1&search=&categoryIds=`));
  }, [dispatch]);

  
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (page > 1) setPage(1);
    if (!searchValue && !category?.title && page === 1) {
      dispatch(
        getProducts(
          `/products/query?limit=12&page=1&search=${encodeURI(
            searchValue
          )}&categoryIds=`
        )
      );
      setOpen(false);
    }
  }, [searchValue]);
  
  
  useEffect(() => {
    if (location.search && category?.title !== "Рекомендуемые товары") {
      setPage(+location.search.split("&")[2].split("=")[1]);
      setValueSearch(decodeURI(location.search.split("&")[0].split("=")[1]));
      dispatch(
        setSearch(decodeURI(location.search.split("&")[0].split("=")[1]))
      );
      setTimeout(() => {
        dispatch(
          getProducts(
            `/products/query?limit=12&page=${
              location.search.split("&")[2].split("=")[1]
            }&search=${
              location.search.includes("searchmain")
              ? location.search.split("&")[0].split("=")[1]
              : decodeURI(location.search.split("&")[0].split("=")[1])
            }&categoryIds=${
              params.id && !category?.search
              ? params.id
              : location.search.split("&")[1].split("=")[1]
            }`
          )
        );
      }, 600)
    }
  }, [location.search]);
  
  useLayoutEffect(() => {
    if (firstUpdate2.current) {
      firstUpdate2.current = false;
      return;
    }
    
    window.scrollTo(0, 0);
    dispatch(setProducts([]));
    category?.title === "Рекомендуемые товары"
    ? dispatch(getProd(`recommendations?limit=12&page=${page}`))
    : 
    setTimeout(() => {
      dispatch(
        getProducts(
          `/products/query?limit=12&page=${page}&search=${encodeURI(
            searchValue
          )}&categoryIds=${params.id ? params.id : ""}`
        )
      );
    }, 200)
  }, [page]);  
  

  return (
    <Box component="section">
      <Box
        display="flex"
        mb={2}
        alignItems={{ xs: "start", md: "center" }}
        flexDirection={{ xs: "column", md: "column" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h4" fontWeight={700}>
            {category?.title2
              ? category?.title2
              : category?.title3
              ? category?.title3
              : category?.title
              ? category?.title
              : typeof category == "string" ? category : "Каталог"}
          </Typography>
          {!md && (
            <IconButton onClick={() => dispatch(handleFilter(true))}>
              <img src={filter} alt="" />
            </IconButton>
          )}
        </Box>
        {!md && (
          <Box display="flex" overflowY="scroll" columnGap={1}>
            {chip &&
              chip.map((item, idx) => (
                <Chip
                  key={idx}
                  sx={{
                    "& .MuiChip-label": {
                      fontFamily: "Open Sans",
                      color: "#959595",
                    },
                  }}
                  label={item}
                  variant="outlined"
                  onDelete={() => handleDelete(item)}
                />
              ))}
          </Box>
        )}
        <Search
          setSearched={setSearched}
          setOpen={setOpen}
          open={open}
          setCategory={setCategory}
          searched={searched}
          page={page}
          searchValue={searchValue}
          setValueSearch={setValueSearch}
          params={params}
        />
      </Box>
      {md && (
        <Box display="flex" mb={2.6} columnGap={1}>
          {chip &&
            chip.map((item, idx) => (
              <Chip
                key={idx}
                sx={{
                  "& .MuiChip-label": {
                    fontFamily: "Open Sans",
                    color: "#959595",
                  },
                }}
                label={item}
                variant="outlined"
                onDelete={() => handleDelete(item)}
              />
            ))}
        </Box>
      )}
      {loading || showSkeleton ? (
        <>
          <Grid2 container spacing={2}>
            {Array.from(Array(8).keys()).map((item, idx) => (
              <Grid2 key={idx} size={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 4 }}>
                <Skeleton
                  variant="rect"
                  sx={{ borderRadius: "20px", mb: 1 }}
                  width="100%"
                  height="178px"
                />
                <Skeleton width="70%" />
                <Skeleton width="80%" />
                <Skeleton width="40%" />
              </Grid2>
            ))}
          </Grid2>
        </>
      ) : !products?.products?.length ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap={4}
        >
          <img src={empty} alt="" />
          <Typography variant="subtitle1" fontWeight={600} color="#AEAEAE">
            По вашему запросу{" "}
            <span style={{ color: "#000" }}>{searchValue} </span>
            ничего не найдено
          </Typography>
        </Box>
      ) : (
        <>
          <Grid2 container spacing={2} alignItems={"stretch"}>
            {Array.isArray(products?.products) &&
              products?.products?.map((item, idx) => (
                <Grid2 size={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 3 }} key={idx}>
                  {category?.title === "Рекомендуемые товары" ? (
                    <Card search setCart={setCart} item={item} />
                  ) : (
                    <Card setCart={setCart} item={item} />
                  )}
                </Grid2>
              ))}
          </Grid2>
          <PaginationLarge
            page={page}
            handleChange={handleChange}
            products={products}
          />
        </>
      )}
    </Box>
  );
};

export default Products;