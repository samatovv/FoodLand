import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../api/";

const initialState = {
  products: [],
  recomendations: [],
  search: "",
  details: {},
  names: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setRecomendations: (state, action) => {
      state.recomendations = action.payload;
    },

    setProductsNames: (state, action) => {
      state.names = action.payload;
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

export const getRecomendations = (data) => (dispatch) => {
  Products.getProducts(data).then((res) => dispatch(setRecomendations(res)));
};

export const getDetails = (id) => (dispatch) => {
  Products.getDetails(id).then((res) => dispatch(setDetails(res)));
};

export const getProductsNames = () => (dispatch) => {
  Products.getProductsNames().then((res) => dispatch(setProductsNames(res)));
};

export const {
  setProducts,
  setSearch,
  setDetails,
  setProductsNames,
  setRecomendations,
} = productsSlice.actions;

export default productsSlice.reducer;
