import {
  Box,
  ClickAwayListener,
  InputAdornment,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getProductsNames } from "../redux/reducers/products";
import { translit } from "../hooks/translit";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const names = useSelector((state) => state.products.names);

  const [value, setValue] = useState();
  const [open, setOpen] = useState();
  const [searched, setSearched] = useState([]);

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

  const handleClose = () => {
    setOpen(false);
    setValue("");
  };

  useEffect(() => {
    dispatch(getProductsNames());
  }, []);

  useEffect(() => {
    if (Array.isArray(names)) setSearched(names);
  }, [names]);

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        setOpen(false);
        navigate(`/catalog/?search=${value}&categoryIds=&page=1`);
      }}
      position="relative"
    >
      <TextField
        placeholder="Найти на FOODLAND -"
        value={value}
        autoComplete="off"
        onChange={(e) => {
          if (!open) setOpen(!open);
          setValue(e.target.value);
          handleSearch(e);
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="start"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  if (value)
                    navigate(`/catalog/?search=${value}&categoryIds=&page=1`);
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7333 12.7333L17 17M14.8667 7.93333C14.8667 11.7625 11.7625 14.8667 7.93333 14.8667C4.10416 14.8667 1 11.7625 1 7.93333C1 4.10416 4.10416 1 7.93333 1C11.7625 1 14.8667 4.10416 14.8667 7.93333Z"
                    stroke="black"
                    stroke-width="1.5"
                  />
                </svg>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          width: { xs: "100%", md: "auto" },
          zIndex: 4,
          background: "#FFF",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #E2E2E2",
            borderRadius: !value ? "15px" : "15px 15px 0 0!important",
          },
          "&.MuiFormControl-root": {
            background: "#FFF",
            borderRadius: !value ? "15px" : "15px 15px 0 0!important",
          },
          "& input": {
            borderRadius: !value ? "15px" : "15px 15px 0 0!important",
            p: "10.5px 16px 10.5px 18px!important",
          },
          "& fieldset": {
            display: "none",
          },
          minHeight: 48,
            '& input::placeholder': {
              color: 'black', 
              fontStyle: 'Open Sans',
              opacity: 1,
              fontSize: 14
          },
        }}
      />
      {value && (
        <ClickAwayListener onClickAway={handleClose}>
          <Box
            sx={{
              opacity: open ? "1" : "0",
              visibility: open ? "unset" : "hidden",
              height: open ? "auto" : "0px",
              maxHeight: 140,
              overflow: "scroll",
              transition: "height 300ms linear",
              backgroundColor: "#FFF",
              p: "24px 0 15px",
              borderRadius: "0 0 15px 15px",
              position: "absolute",
              top: 35,
              width: "-webkit-fill-available",
              zIndex: 3,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(`/catalog/?search=${value}&categoryIds=&page=1`);
              }}
              mb={0.8}
            >
              <Typography className="sans">
                {value && "Найти"} <b>{value}</b>
              </Typography>
            </ListItemButton>
            {searched?.map((item, idx) => (
              <ListItemButton
                key={idx}
                onClick={() => {
                  setOpen(false);
                  setValue(item.name);
                  navigate(`/catalog/${translit(item.name)}/${item.id}`);
                }}
                mb={0.8}
              >
                <Typography className="sans">{item.name}</Typography>
              </ListItemButton>
            ))}
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default Search;
