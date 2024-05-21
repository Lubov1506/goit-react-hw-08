import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});
const setAuthHeaders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeaders = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("users/signup", credentials);
      setAuthHeaders(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("users/login", credentials);
      setAuthHeaders(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await instance.post("users/logout");
      clearAuthHeaders();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    if (!auth.token) {
      return thunkAPI.rejectWithValue("There isn`t token");
    }
    try {
      setAuthHeaders(auth.token);
      const { data } = await instance.post("users/current");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
