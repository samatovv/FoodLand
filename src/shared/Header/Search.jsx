import {
  Backdrop,
  Box,
  Button,
  ClickAwayListener,
  Dialog,
  InputAdornment,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getProductsNames } from "../../redux/reducers/products";

const SearchHeader = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const names = useSelector((state) => state.products.names);

  const [value, setValue] = useState();
  const [searched, setSearched] = useState([]);
  const [all, setAll] = useState(false);

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
    setTimeout(() => setValue(""), 1000);
  };

  useEffect(() => {
    dispatch(getProductsNames());
  }, []);

  useEffect(() => {
    if (Array.isArray(names)) setSearched(names);
  }, [names]);

  return (
    <Dialog
      sx={{
        "& .MuiDialog-container": {
          justifyContent: "end!important",
          alignItems: "start!important",
          overflowX: "hidden",
          width: "100%",
        },
        "& .MuiPaper-root": {
          maxWidth: "unset",
          width: "70%",
        },
      }}
      open={open}
      onClose={handleClose}
    >
      <Box
        width="100%"
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/catalog/?search=${value}&categoryIds=&page=1`);
          handleClose();
        }}
      >
        <TextField
          value={value}
          autoComplete="off"
          onChange={(e) => {
            setValue(e.target.value);
            handleSearch(e);
          }}
          sx={{
            width: "100%",
            background: "#FFF",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2",
              borderRadius: !value ? "10px" : "10px 10px 0 0!important",
            },
            "&.MuiFormControl-root": {
              background: "#FFF",
              borderRadius: !value ? "10px" : "10px 10px 0 0!important",
            },
            "& input": {
              borderRadius: !value ? "10px" : "10px 10px 0 0!important",
              p: "10.5px 16px 10.5px 0px!important",
            },
            "& fieldset": {
              display: "none",
            },
          }}
          placeholder="Найти"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ cursor: "pointer" }}>
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
              endAdornment: (
                <InputAdornment
                  onClick={handleClose}
                  position="end"
                  sx={{ cursor: "pointer" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.461 12.2484L12.4 13.3094L9.999 10.9104L7.599 13.3064L6.539 12.2454L8.938 9.85038L6.539 7.45237L7.6 6.39138L10 8.79037L12.401 6.39337L13.461 7.45538L11.061 9.85038L13.461 12.2484ZM10 0.109375C4.624 0.109375 0.25 4.48338 0.25 9.85938C0.25 15.2354 4.624 19.6094 10 19.6094C15.376 19.6094 19.75 15.2354 19.75 9.85938C19.75 4.48338 15.376 0.109375 10 0.109375Z"
                      fill="#6E8435"
                    />
                  </svg>
                </InputAdornment>
              ),
            },
          }}
        />
        {value && (
          <Box
            sx={{
              opacity: open ? "1" : "0",
              visibility: open ? "unset" : "hidden",
              height: open ? "auto" : "0px",
              maxHeight: "60vh",
              overflowY: all ? "scroll" : "auto",
              overflowX: "hidden",
              transition: "height 300ms linear",
              backgroundColor: "#FFF",
              p: "22px 0 10px",
              borderRadius: "0 0 10px 10px",
              position: "relative",
              // width: "-webkit-fill-available",
              // zIndex: 3,

              "& .MuiButtonBase-root": {
                pl: "40px",
              },
            }}
          >
            {!searched.length ? (
              <Typography className="sans" ml="40px">
                Ничего не найдено
              </Typography>
            ) : (
              <ListItemButton
                onClick={() => {
                  handleClose();

                  navigate(`/catalog/?search=${value}&categoryIds=&page=1`);
                }}
                mb={0.8}
              >
                <Typography className="sans">
                  <b>{value}</b>
                </Typography>
              </ListItemButton>
            )}
            {all
              ? searched?.map((item, idx) => (
                  <ListItemButton
                    key={idx}
                    onClick={() => {
                      handleClose();
                      navigate(`/catalog/details/${item.id}`);
                    }}
                    mb={0.8}
                  >
                    <Typography className="sans">{item.name}</Typography>
                  </ListItemButton>
                ))
              : searched?.slice(0, 4).map((item, idx) => (
                  <ListItemButton
                    key={idx}
                    onClick={() => {
                      handleClose();
                      navigate(`/catalog/details/${item.id}`);
                    }}
                    mb={0.8}
                  >
                    <Typography className="sans">{item.name}</Typography>
                  </ListItemButton>
                ))}
            {searched.length ? (
              <Box p="30px 40px 0">
                <Button
                  onClick={() => setAll(!all)}
                  variant="outlined"
                  sx={{
                    color: "var(--primary)",
                    borderRadius: "10px",
                    p: "10px 40px!important",
                  }}
                  disabled={searched.length <= 5}
                  fullWidth
                  color="primary"
                >
                  {all ? "Скрыть" : "Смотреть все результаты"}
                </Button>
              </Box>
            ) : (
              ""
            )}
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default SearchHeader;
