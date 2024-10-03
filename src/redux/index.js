import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/mainSlice";
import productsReducer from "./reducers/products";
import profileReducer from "./reducers/profile";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    products: productsReducer,
    profile: profileReducer,
  },
});
