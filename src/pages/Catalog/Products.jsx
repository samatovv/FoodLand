/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Chip,
  ClickAwayListener,
  Grid2,
  IconButton,
  InputAdornment,
  ListItemButton,
  Skeleton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Find from "../../assets/images/Find";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import {
  getProducts,
  getProductsNames,
  setProducts,
  setSearch,
} from "../../redux/reducers/products";
import filter from "../../assets/images/filter.svg";
import empty from "../../assets/images/empty-no-bg.svg";
import { handleFilter, handleLoading } from "../../redux/reducers/mainSlice";
import CloseSearch from "../../assets/images/CloseSearch";
import Fuse from "fuse.js";
import PaginationLarge from "../../components/Pagination";
import Search from "./Search";

const Products = ({
  setCart,
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
  const names = useSelector((state) => state.products.names);

  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState([]);

  const firstUpdate = useRef(true);
  const firstUpdate2 = useRef(true);

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
    navigate(
      `/catalog/?search=${
        location.search.split("&")[0].split("=")[1]
          ? decodeURI(location.search.split("&")[0].split("=")[1])
          : ""
      }&categoryIds=&page=${value}`
    );
  };

  useEffect(() => {
    if (!names) dispatch(getProductsNames());

    dispatch(handleLoading(true));
    if (!products.length && !location.search)
      dispatch(
        getProducts(`/products/query?limit=12&page=1&search=&categoryIds=`)
      );

    // if (location.search) setPage(location.search.split("&")[2].split("=")[1]);
  }, []);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (page > 1) setPage(1);
    if (!searchValue && page === 1) {
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

  useLayoutEffect(() => {
    if (firstUpdate2.current) {
      firstUpdate2.current = false;
      return;
    }

    window.scrollTo(0, 0);
    dispatch(setProducts([]));
    dispatch(
      getProducts(
        `/products/query?limit=12&page=${page}&search=${encodeURI(
          searchValue
        )}&categoryIds=${
          params?.length ? `${params.map((item) => item.id)}` : ""
        }`
      )
    );
  }, [page]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // hide linear progress
    setTimeout(() => dispatch(handleLoading(false)), 500);
  }, [products]);

  useEffect(() => {
    if (location.search) {
      setPage(+location.search.split("&")[2].split("=")[1]);
      setValueSearch(decodeURI(location.search.split("&")[0].split("=")[1]));
      dispatch(
        setSearch(decodeURI(location.search.split("&")[0].split("=")[1]))
      );

      dispatch(
        getProducts(
          `/products/query?limit=12&page=${
            location.search.split("&")[2].split("=")[1]
          }&search=${
            location.search.includes("searchmain")
              ? location.search.split("&")[0].split("=")[1]
              : decodeURI(location.search.split("&")[0].split("=")[1])
          }&categoryIds=${
            params?.length
              ? `${params.map((item) => item.id)}`
              : location.search.split("&")[1].split("=")[1]
          }`
        )
      );
    }
  }, [location.search]);

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
            {category?.title ? category?.title : "Каталог"}
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
      {loading ? (
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
          <Grid2 container spacing={2}>
            {Array.isArray(products?.products) &&
              products?.products?.map((item, idx) => (
                <Grid2 size={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 3 }} key={idx}>
                  <Card setCart={setCart} item={item} />
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
