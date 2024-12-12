import {
  Box,
  ClickAwayListener,
  IconButton,
  InputAdornment,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseSearch from "../../assets/images/CloseSearch";
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/products";
import Find from "../../assets/images/Find";
import { useNavigate } from "react-router";
import { translit } from "../../hooks/translit";

const Search = ({
  setSearched,
  setOpen,
  open,
  searched,
  page,
  searchValue,
  setValueSearch,
  params,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const names = useSelector((state) => state.products.names);

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

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        setOpen(false);
        if (page === 1) {
          navigate(`/catalog/?search=${searchValue}&categoryIds=&page=1`);
          dispatch(
            getProducts(
              `/products/query?limit=12&page=1&search=${encodeURI(
                searchValue
              )}&categoryIds=`
            )
          );
        }
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
          // navigate(`/catalog/?search=${searchValue}&categoryIds=&page=1`);
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
                    navigate(`/catalog/?search=&categoryIds=&page=1`);
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
      <ClickAwayListener onClickAway={() => setOpen(false)}>
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
              navigate(`/catalog/?search=${searchValue}&categoryIds=&page=1`);
              dispatch(
                getProducts(
                  `/products/query?limit=12&page=1&search=${encodeURI(
                    searchValue
                  )}&categoryIds=${params?.id}`
                )
              );
            }}
            mb={0.8}
          >
            <Typography className="sans">{searchValue}</Typography>
          </ListItemButton>
          {searched?.map((item, idx) => (
            <ListItemButton
              key={idx}
              onClick={() => {
                setOpen(false);
                setValueSearch(item.name);
                navigate(`/catalog/${translit(item.name)}/${item.id}`);
              }}
              mb={0.8}
            >
              <Typography className="sans">{item.name}</Typography>
            </ListItemButton>
          ))}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default Search;
