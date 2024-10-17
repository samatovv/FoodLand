import {
  Box,
  Chip,
  Grid2,
  IconButton,
  InputAdornment,
  ListItemButton,
  Popover,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { handleFilter } from "../../redux/reducers/mainSlice";
import CloseSearch from "../../assets/images/CloseSearch";
import Fuse from "fuse.js";

const Products = ({
  chip,
  setChip,
  params,
  setParams,
  searchValue,
  setValueSearch,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const md = useMediaQuery("(min-width:900px)");

  const products = useSelector((state) => state.products.products);
  const names = useSelector((state) => state.products.names);
  const search = useSelector((state) => state.products.search);

  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState([]);
  const [prod, setProd] = useState([]);

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
    setChip(chip.filter((el) => el !== item));
    setParams(params.filter((el) => el.name !== item));
    dispatch(
      getProducts(
        `/products/query?search=${searchValue}&categoryIds=${params
          .filter((el) => el.name !== item)
          .map((item) => item.id)}`
      )
    );
  };

  useEffect(() => {
    dispatch(getProductsNames());
    if (location.search) {
      setValueSearch(search);
      if (!location.search.includes("category"))
        dispatch(setSearch(decodeURI(location.search.split("=")[1])));
      // dispatch(
      //   getProducts(
      //     `/products/query?search=${
      //       location.search.split("?")[1]
      //     }&categoryIds=${`${params.map((item) => item.id)}`}`
      //   )
      // );
    } else {
      dispatch(getProducts(`/products`));
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(names)) setSearched(names);
  }, [names]);

  useEffect(() => {
    if (products.results) setProd(products?.results);
    else setProd(products);
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
          <Box display="flex" columnGap={1}>
            {chip && (
              <Chip
                sx={{
                  "& .MuiChip-label": {
                    fontFamily: "Open Sans",
                    color: "#959595",
                  },
                }}
                label={chip}
                variant="outlined"
                onDelete={handleDelete}
              />
            )}
          </Box>
        )}
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
            dispatch(
              getProducts(
                `/products/query?search=${searchValue}&categoryIds=${params.map(
                  (item) => item.id
                )}`
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
                endAdornment: (
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
                    `/products/query?search=${searchValue}&categoryIds=${params.map(
                      (item) => item.id
                    )}`
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
                      `/products/query?search=${
                        item.name
                      }&categoryIds=${params.map((item) => item.id)}`
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
      {!prod?.length ? (
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
      )}
    </Box>
  );
};

export default Products;
