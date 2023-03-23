import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi } from 'http/http';


export const fetchProductCards = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await publicApi.get('/ProductCards');
      return response.data;

    } catch (error) {
      return rejectWithValue(error);
    }
  },
);