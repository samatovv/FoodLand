import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../api/";

const initialState = {
  products: [],
  search: "",
  details: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const getProducts = (data) => (dispatch) => {
  Products.getProducts(data).then((res) => dispatch(setProducts(res)));
};

export const getDetails = (id) => (dispatch) => {
  Products.getDetails(id).then((res) => dispatch(setDetails(res)));
};

export const { setProducts, setSearch, setDetails } = productsSlice.actions;

export default productsSlice.reducer;
