import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../api/";

const initialState = {
  products: [],
  search: "",
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
  },
});

export const getProducts = (data) => (dispatch) => {
  Products.getProducts(data).then((res) => dispatch(setProducts(res)));
};

export const { setProducts, setSearch } = productsSlice.actions;

export default productsSlice.reducer;
