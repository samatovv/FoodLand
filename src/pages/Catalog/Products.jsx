import {
  Box,
  Chip,
  Grid2,
  IconButton,
  InputAdornment,
  ListItemButton,
  Popover,
  Skeleton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Find from "../../assets/images/Find";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  getProducts,
  getProductsNames,
  setSearch,
} from "../../redux/reducers/products";
import filter from "../../assets/images/filter.svg";
import empty from "../../assets/images/emptyCart.svg";
import { handleFilter, handleLoading } from "../../redux/reducers/mainSlice";
import CloseSearch from "../../assets/images/CloseSearch";
import Fuse from "fuse.js";
import PaginationLarge from "../../components/Pagination";

const Products = ({
  chip,
  setChip,
  params,
  setParams,
  searchValue,
  setValueSearch,
  page,
  setPage,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const md = useMediaQuery("(min-width:900px)");

  const products = useSelector((state) => state.products.products);
  const names = useSelector((state) => state.products.names);
  const search = useSelector((state) => state.products.search);
  const loading = useSelector((state) => state.main.loading);

  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState([]);
  const [prod, setProd] = useState([]);

  const firstUpdate = useRef(true);

  const options = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.2,
    keys: ["name"],
  };

  const fuse = new Fuse(names, options);

  const handleSearch = (event) => {
    const { value } = event.target;

    if (!value) setSearched(names);

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setSearched(items);
  };

  const handleDelete = (item) => {
    setPage(1);
    setChip(chip.filter((el) => el !== item));
    setParams(params.filter((el) => el.name !== item));
    if (page === 1)
      dispatch(
        getProducts(
          `/products/query?limit=12&page=1&search=${searchValue}&categoryIds=${params
            .filter((el) => el.name !== item)
            .map((item) => item.id)}`
        )
      );
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getProductsNames());
    dispatch(handleLoading(true));
    if (location.search) {
      setValueSearch(search);
      if (!location.search.includes("category"))
        dispatch(setSearch(decodeURI(location.search.split("=")[1])));
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(names)) setSearched(names);
  }, [names]);

  useEffect(() => {
    if (products.results) setProd(products?.results);
    else setProd(products.products);
    // dispatch(handleLoading(false));
  }, [products]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (page > 1) setPage(1);
    if (!searchValue && page === 1) {
      dispatch(
        getProducts(`/products/query?limit=12&page=1&search=&categoryIds=`)
      );
      setOpen(false);
    }
  }, [searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      getProducts(
        `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${
          params.length ? `${params.map((item) => item.id)}` : ""
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
    dispatch(handleLoading(false));
  }, [products]);

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
            {search ? search : "Каталог"}
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
              chip.map((item) => (
                <Chip
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
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
            if (page === 1)
              dispatch(
                getProducts(
                  `/products/query?limit=12&page=1&search=${decodeURI(
                    searchValue
                  )}&categoryIds=${params.map((item) => item.id)}`
                )
              );
          }}
          width="100%"
          position="relative"
        >
          <TextField
            placeholder="Найти на Foodland..."
            fullWidth
            value={searchValue}
            onChange={(e) => {
              if (!open) setOpen(!open);
              setValueSearch(e.target.value);
              handleSearch(e);
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Find />
                  </InputAdornment>
                ),
                endAdornment: searchValue && (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => {
                        setOpen(false);
                        setValueSearch("");
                      }}
                    >
                      <CloseSearch open={open} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              mt: 1.5,
              zIndex: 4,
              background: "#FFF",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #E2E2E2",
              },
              "& input": {
                p: "9px 4px!important",
              },
            }}
          />
          <Box
            sx={{
              opacity: open ? "1" : "0",
              visibility: open ? "unset" : "hidden",
              height: open ? "auto" : "0px",
              maxHeight: 200,
              overflow: "scroll",
              transition: "height 300ms linear",
              backgroundColor: "#F9F9F9",
              p: "24px 0 15px",
              borderRadius: "0 0 20px 20px",
              position: "absolute",
              top: 40,
              width: "-webkit-fill-available",
              zIndex: 3,
            }}
          >
            <ListItemButton
              onClick={() => {
                setOpen(false);
                dispatch(
                  getProducts(
                    `/products/query?limit=12&page=1&search=${encodeURI(
                      searchValue
                    )}&categoryIds=${params.map((item) => item.id)}`
                  )
                );
              }}
              mb={0.8}
            >
              <Typography>{searchValue}</Typography>
            </ListItemButton>
            {searched?.map((item) => (
              <ListItemButton
                onClick={() => {
                  setOpen(false);
                  setValueSearch(item.name);
                  dispatch(
                    getProducts(
                      `/products/query?limit=12&page=1&search=${encodeURI(
                        item.name
                      )}&categoryIds=${params.map((item) => item.id)}`
                    )
                  );
                }}
                mb={0.8}
              >
                <Typography>{item.name}</Typography>
              </ListItemButton>
            ))}
          </Box>
        </Box>
      </Box>
      {md && (
        <Box display="flex" mb={2.6} columnGap={1}>
          {chip &&
            chip.map((item) => (
              <Chip
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
      {loading && !prod?.length ? (
        <>
          <Grid2 container spacing={2}>
            {Array.from(Array(8).keys()).map((item, idx) => (
              <Grid2 size={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 4 }}>
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
      ) : !prod?.length ? (
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
            {Array.isArray(prod) &&
              prod?.map((item, idx) => (
                <Grid2
                  item
                  size={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 4 }}
                  key={idx}
                >
                  <Card item={item} />
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
