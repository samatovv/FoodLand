import { createSlice } from "@reduxjs/toolkit";
import { Main } from "../../api/";

const initialState = {
  open: false,
  filter: false,
  auth: false,
  loading: false,
  banners: [],
  banner: [],
  recomendations: [],
  categories: [],
  news: [],
  newsDetails: {},
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    handleDrawer: (state, action) => {
      state.open = action.payload;
    },
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
    handleAuthDialog: (state, action) => {
      state.auth = action.payload;
    },

    handleLoading: (state, action) => {
      state.loading = action.payload;
    },

    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setBanner: (state, action) => {
      state.banner = action.payload;
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

export const getBanners = (url) => (dispatch) => {
  Main.getBanners(url).then((res) => dispatch(setBanners(res)));
};

export const getBanner = (url) => (dispatch) => {
  Main.getBanners(url).then((res) => dispatch(setBanner(res)));
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
  setBanner,
  setNewsDetails,
  handleFilter,
  handleAuthDialog,
  handleLoading,
} = mainSlice.actions;

export default mainSlice.reducer;
