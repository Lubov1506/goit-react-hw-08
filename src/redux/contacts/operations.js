import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkAPI) => {
    try {
      const response = await instance.post("contacts", {
        name: values.name,
        number: values.number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await instance.delete(`contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, ...body }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`contacts/${id}`, body);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
