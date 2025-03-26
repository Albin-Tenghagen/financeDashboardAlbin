/**
 * historicalPricesSlice.js
 * This reducer manages the fetching and storing of historical stock prices for AAPL using Redux Toolkit.
 * It fetches historical price data from the Financial Modeling Prep API and stores it in both Redux and localStorage.
 *
 * Redux:
 * - Dispatches `fetchHistoricalPrices` when triggered (typically by a component).
 *
 * States handled:
 * - `status`: Tracks the status of the API request (idle, loading, succeeded, failed).
 * - `error`: Stores any error message if the fetch operation fails (e.g., network issues or API errors).
 * - `data`: Holds the fetched historical stock price data for AAPL (dates and price points).
 *
 * Local Storage:
 * - The data is saved to and loaded from localStorage to persist across sessions.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "4VaQvzEdvbD227Udssfv4wn00zgHLV3b";
const historical_prices_url = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2000-01-01&serietype=line&apikey=${apiKey}`;

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("historicalPrices");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from local storage:", error);
    return [];
  }
};

const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem("historicalPrices", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

export const fetchHistoricalPrices = createAsyncThunk(
  "historicalPrices/fetch",
  async () => {
    const response = await fetch(historical_prices_url);
    if (!response.ok) {
      throw new Error("Failed to fetch historical prices");
    }
    const data = await response.json();
    saveToLocalStorage(data);
    return data;
  }
);

const historicalPricesSlice = createSlice({
  name: "historicalPrices",
  initialState: {
    data: loadFromLocalStorage(),
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoricalPrices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHistoricalPrices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchHistoricalPrices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default historicalPricesSlice.reducer;
