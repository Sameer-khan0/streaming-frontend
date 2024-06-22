import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST, REGISTER_USER, LOGIN_USER, UPDATE_USER, GET_USER, LOGOUT_USER } from "../../Apis";

// Define the action type and thunk for registering a user
export const RegisterUser = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(HOST + REGISTER_USER, userData);
      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the action type and thunk for logging in a user
export const LoginUser = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(HOST + LOGIN_USER, credentials);
      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the action type and thunk for updating a user
export const UpdateUser = createAsyncThunk(
  "user/update",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put(HOST + UPDATE_USER, userData, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the action type and thunk for fetching user data
export const GetUser = createAsyncThunk(
  "user/get",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(HOST + GET_USER, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the action type and thunk for logging out a user
export const LogoutUser = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(HOST + LOGOUT_USER, {}, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      // Clear the token from local storage
      localStorage.removeItem("token");
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
