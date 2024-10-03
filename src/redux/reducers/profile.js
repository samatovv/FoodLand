import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../../api/";

const initialState = {
  data: [],
  loginData: {},
  uploadedFile: {},
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
        status: action.payload.status,
        data: action.payload.data,
      };
    },

    setUploadedFile: (state, action) => {
      state.uploadedFile = action.payload;
    },
  },
});

export const getProfileData = (data) => (dispatch) => {
  Profile.getProfileData(data).then((res) => dispatch(setProfile(res)));
};

export const login = (data) => (dispatch) => {
  Profile.login(data).then((res) => dispatch(setLoginData(res)));
};

export const uploadFile = (data) => (dispatch) => {
  Profile.uploadFile(data).then((res) => dispatch(setUploadedFile(res)));
};

export const { setProfile, setLoginData, setUploadedFile } =
  profileSlice.actions;

export default profileSlice.reducer;
