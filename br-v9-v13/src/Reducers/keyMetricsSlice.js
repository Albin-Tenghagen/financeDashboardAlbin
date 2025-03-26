/**
 * keyMetricsSlice.js
 * This reducer manages the fetching and storing of key financial metrics for AAPL using Redux Toolkit.
 * It fetches data from the Financial Modeling Prep API and stores it in both Redux and localStorage.
 *
 * Redux:
 * - Dispatches `fetchKeyMetrics` when triggered (typically by a component).
 *
 * States handled:
 * - `status`: Tracks the status of the API request (idle, loading, succeeded, failed).
 * - `error`: Stores any error message if the fetch operation fails (e.g., network issues or API errors).
 * - `data`: Holds the fetched key financial metrics for AAPL (such as P/E ratio, earnings, etc.).
 *
 * Local Storage:
 * - The data is saved to and loaded from localStorage to persist across sessions.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "4VaQvzEdvbD227Udssfv4wn00zgHLV3b";
const key_metrics_url = `https://financialmodelingprep.com/api/v3/key-metrics/AAPL?apikey=${apiKey}`;

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("keyMetrics");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from local storage:", error);
    return [];
  }
};

const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem("keyMetrics", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

export const fetchKeyMetrics = createAsyncThunk(
  "keyMetrics/fetch",
  async () => {
    const response = await fetch(key_metrics_url);
    if (!response.ok) {
      throw new Error("Failed to fetch key metrics");
    }
    const data = await response.json();
    saveToLocalStorage(data);
    return data;
  }
);

const keyMetricsSlice = createSlice({
  name: "keyMetrics",
  initialState: {
    data: loadFromLocalStorage(),
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKeyMetrics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchKeyMetrics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchKeyMetrics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default keyMetricsSlice.reducer;
