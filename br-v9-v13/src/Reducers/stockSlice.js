/**
 * stockSlice.js
 * This reducer manages the fetching and storing of stock price changes for a company (AAPL) using Redux Toolkit.
 * It fetches data from the Financial Modeling Prep API and stores it in Redux.
 *
 * Redux:
 * - Dispatches `fetchStockPriceChange` when triggered (typically by a component).
 *
 * States handled:
 * - `loading`: Tracks the loading state for fetching stock price data.
 * - `error`: Stores any error message if the fetch operation fails (e.g., network issues or API errors).
 * - `priceChanges`: Holds the fetched stock price change data, which includes percentage changes for different periods (1D, 5D, 1M, etc.).
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "TLoYbueDL9RUs9JZfiIKmp7uBFSilOzk";
const BASE_URL = "https://financialmodelingprep.com/api/v3";

// Async thunk for stock price change (AAPL)
export const fetchStockPriceChange = createAsyncThunk(
  "stock/fetchPriceChange",
  async (company, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/stock-price-change/${company}?apikey=${API_KEY}`
      );
      const data = await response.json();
      return data[0] || {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    priceChanges: {},
    loading: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockPriceChange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockPriceChange.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.symbol) {
          state.priceChanges[action.payload.symbol] = action.payload;
        }
      })
      .addCase(fetchStockPriceChange.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default stockSlice.reducer;
