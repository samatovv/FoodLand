import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../../api/";

const initialState = {
  data: [],
  loginData: {},
  uploadedFile: {},
  createdOrder: {},
  orders: {},
  order: {},
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.data = action.payload;
    },

    setLoginData: (state, action) => {
      state.loginData = {
        status: action.payload?.status,
        data: action.payload.data,
      };
    },

    setUploadedFile: (state, action) => {
      state.uploadedFile = action.payload;
    },

    setCreatedOrder: (state, action) => {
      state.createdOrder = action.payload;
    },

    setOrders: (state, action) => {
      state.orders = {
        ...action.payload,
        results: action.payload.results.reverse(),
      };
    },

    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const getProfileData = () => (dispatch) => {
  return Profile.getProfileData()
    .then((res) => {
      dispatch(setProfile(res));
    });
};

export const login = (data) => (dispatch) => {
  Profile.login(data).then((res) => dispatch(setLoginData(res)));
};

export const uploadFile = (data) => (dispatch) => {
  Profile.uploadFile(data).then((res) => dispatch(setUploadedFile(res)));
};

export const updateProfileData = (data) => (dispatch) => {
  Profile.updateProfileData(data).then((res) => dispatch(setUploadedFile(res)));
};

export const createOrder = (data) => (dispatch) => {
  Profile.createOrder(data).then((res) => dispatch(setCreatedOrder(res)));
};

export const repeatOrder = (id) => (dispatch) => {
  Profile.repeatOrder(id).then((res) => dispatch(setCreatedOrder(res)));
};

export const getOrders = (id, from, to) => (dispatch) => {
  Profile.getOrders(id, from, to).then((res) => dispatch(setOrders(res)));
};

export const getOrder = (id) => (dispatch) => {
  Profile.getOrder(id).then((res) => dispatch(setOrder(res)));
};

export const {
  setProfile,
  setLoginData,
  setUploadedFile,
  setCreatedOrder,
  setOrders,
  setOrder,
} = profileSlice.actions;

export default profileSlice.reducer;
