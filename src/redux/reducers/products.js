import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../api/";

const initialState = {
  products: [],
  recomendations: [],
  search: "",
  details: {},
  names: [],
  loading: false,
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const getProducts = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await Products.getProducts(data);
    dispatch(setProducts(res));
  } catch (error) {
    console.error("Ошибка загрузки продуктов:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getProd = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await Products.getProducts(data);
    dispatch(setProd(res));
  } catch (error) {
    console.error("Ошибка загрузки прод:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getRecomendations = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await Products.getProducts(data);
    dispatch(setRecomendations(res));
  } catch (error) {
    console.error("Ошибка загрузки рекомендаций:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getDetails = (id) => async (dispatch, getState) => {
  const state = getState();
  const currentDetails = state.products.details;

  if (currentDetails?.id === id) return;

  dispatch(setLoading(true));

  try {
    const res = await Products.getDetails(id);

    if (JSON.stringify(currentDetails) !== JSON.stringify(res)) {
      dispatch(setDetails(res));
    }
  } catch (error) {
    console.error("Ошибка загрузки деталей продукта:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getProductsNames = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await Products.getProductsNames();
    dispatch(setProductsNames(res));
  } catch (error) {
    console.error("Ошибка загрузки имен продуктов:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const {
  setProducts,
  setSearch,
  setDetails,
  setProductsNames,
  setRecomendations,
  setProd,
  setLoading,
} = productsSlice.actions;

export default productsSlice.reducer;
