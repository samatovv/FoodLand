import { createSlice } from "@reduxjs/toolkit";
import { Main } from "../../api/";

const initialState = {
  open: false,
  banners: [],
  recomendations: [],
  categories: [],
  news: [],
  newsDetails: {},
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    handleDrawer: (state) => {
      state.open = !state.open;
    },

    setBanners: (state, action) => {
      state.banners = action.payload;
    },

    setProductsRecomended: (state, action) => {
      state.recomendations = action.payload;
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setNews: (state, action) => {
      state.news = action.payload;
    },

    setNewsDetails: (state, action) => {
      state.newsDetails = action.payload;
    },
  },
});

export const getBanners = () => (dispatch) => {
  Main.getBanners().then((res) => dispatch(setBanners(res)));
};

export const getProductsRecomended = () => (dispatch) => {
  Main.getProductsRecomended().then((res) =>
    dispatch(setProductsRecomended(res))
  );
};

export const getCategories = () => (dispatch) => {
  Main.getCategories().then((res) => dispatch(setCategories(res)));
};

export const getNews = () => (dispatch) => {
  Main.getNews().then((res) => dispatch(setNews(res)));
};

export const getNewsDetails = (id) => (dispatch) => {
  Main.getNewsDetails(id).then((res) => dispatch(setNewsDetails(res)));
};

export const {
  handleDrawer,
  setProductsRecomended,
  setCategories,
  setNews,
  setBanners,
  setNewsDetails,
} = mainSlice.actions;

export default mainSlice.reducer;
