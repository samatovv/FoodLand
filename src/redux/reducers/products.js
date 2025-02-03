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
    setProd: (state, action) => {
      state.products = {
        ...state.products,
        ...action.payload,
        products: action.payload.results,
      };
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

export const getProd = (data) => (dispatch) => {
  Products.getProducts(data).then((res) => dispatch(setProd(res)));
};

export const getRecomendations = (data) => (dispatch) => {
  Products.getProducts(data).then((res) => dispatch(setRecomendations(res)));
};

export const getDetails = (id) => async (dispatch, getState) => {
  const state = getState();
  const currentDetails = state.products.details;

  // Проверяем, загружены ли уже данные, и не обновляем, если они совпадают
  if (currentDetails?.id === id) return;

  try {
    const res = await Products.getDetails(id);

    // Проверяем, действительно ли данные изменились (глубокое сравнение)
    if (JSON.stringify(currentDetails) !== JSON.stringify(res)) {
      dispatch(setDetails(res));
    }
  } catch (error) {
    console.error("Ошибка загрузки деталей продукта:", error);
  }
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
  setProd,
} = productsSlice.actions;

export default productsSlice.reducer;
