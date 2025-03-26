import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * SpecificStock.jsx
 * This component fetches and displays NASDAQ stock price change over a time up to 10 years using redux Toolkit
 *
 * Redux:
 * - Dispatches fetchStockPriceChange when mounted
 *
 *
 * States handled:
 * - loading: shows loading message
 * - error: Shows error message
 * - stock: renders the stock price points in <li> elements
 */
const SpecificStock = React.memo(({ stock, removeStock }) => {
  const { error } = useSelector((state) => state.stock);
  const priceChange = stock;
  const [loading, setLoading] = useState(true);
  const getIndicatorColor = useMemo(
    () => (value) => {
      if (value > 0) return "text-green-500";
      if (value < 0) return "text-red-500";
      return "text-yellow500";
    },
    []
  );

  useEffect(() => {
    if (priceChange) {
      setLoading(false);
    }
  }, [priceChange]);

  if (loading)
    return (
      <p className="card-hover-effect md:w-5/12 md:m-3  flex flex-col m-5 p-3.5 justify-center items-center box-content shadow-lg bg-accent rounded-md ">
        Loading {stock.symbol} price change...
      </p>
    );
  if (error)
    return (
      <p className="card-hover-effect md:w-5/12 md:m-3  flex flex-col m-5 p-3.5 justify-center items-center box-content shadow-lg bg-accent rounded-md ">
        Error: {error}
      </p>
    );
  if (!priceChange || Object.keys(priceChange).length === 0) {
    return (
      <p className="card-hover-effect md:w-5/12 md:m-3  flex flex-col m-5 p-3.5 justify-center items-center box-content shadow-lg bg-accent rounded-md ">
        No price change data available at this time.
      </p>
    );
  }

  return (
    <article
      tabIndex="0"
      className="card-hover-effect relative md:w-5/12 md:m-3  flex flex-col m-5 p-3.5 justify-center items-center box-content shadow-lg bg-accent rounded-md "
    >
      <button
        onClick={() => removeStock(stock.symbol)}
        className="button-focus-effect bg-interactive absolute top-2 right-2  rounded-full w-8 h-8 flex items-center justify-center transition transform hover:scale-110 shadow-lgs"
      >
        <img className="w-8 h-8" src="/Icons/remove-add-dark/X.png" alt="" />
      </button>

      <h2 className=" font-title font-bold text-2xl md:text-2xl lg:text-3xl justify-center items-center">
        {stock.symbol} Stock Price Change over time
      </h2>

      <ul className="flex flex-row flex-wrap m-2 p-2 gap-1 justify-center items-center">
        <li className="rounded-2xl font-text">
          1 Day:{" "}
          <span className={getIndicatorColor(priceChange["1D"])}>
            {priceChange?.["1D"] ?? "N/A"}%
          </span>
        </li>
        <li className="rounded-2xl font-text">
          5 Day:{" "}
          <span className={getIndicatorColor(priceChange["5D"])}>
            {priceChange?.["5D"] ?? "N/A"}%
          </span>
        </li>
      </ul>

      <ul className="flex flex-row flex-wrap m-2 p-2 gap-1 justify-center items-center">
        <li className="rounded-2xl font-text">
          1 Month:{" "}
          <span className={getIndicatorColor(priceChange["1M"])}>
            {priceChange?.["1M"] ?? "N/A"}%
          </span>
        </li>
        <li className="rounded-2xl font-text">
          3 Months:{" "}
          <span className={getIndicatorColor(priceChange["3M"])}>
            {priceChange?.["3M"] ?? "N/A"}%
          </span>
        </li>
        <li className="rounded-2xl font-text">
          6 Months:{" "}
          <span className={getIndicatorColor(priceChange["6M"])}>
            {priceChange?.["6M"] ?? "N/A"}%
          </span>
        </li>
      </ul>

      <ul className="flex flex-row flex-wrap m-2 p-2 gap-1 justify-center items-center">
        <li className="rounded-2xl font-text">
          Year to Date:{" "}
          <span className={getIndicatorColor(priceChange["ytd"])}>
            {priceChange?.["ytd"] ?? "N/A"}%
          </span>
        </li>
        <li className="rounded-2xl font-text">
          1 Year:{" "}
          <span className={getIndicatorColor(priceChange["1Y"])}>
            {priceChange?.["1Y"] ?? "N/A"}%
          </span>
        </li>
        <li className="rounded-2xl font-text">
          3 Years:{" "}
          <span className={getIndicatorColor(priceChange["3Y"])}>
            {priceChange?.["3Y"] ?? "N/A"}%
          </span>
        </li>
        <li className="rounded-2xl font-text">
          5 Year:{" "}
          <span className={getIndicatorColor(priceChange["5Y"])}>
            {priceChange?.["5Y"] ?? "N/A"}%
          </span>
        </li>
        <li className="rounded-2xl font-text">
          10 Years:{" "}
          <span className={getIndicatorColor(priceChange["10Y"])}>
            {priceChange?.["10Y"] ?? "N/A"}%
          </span>
        </li>
      </ul>
    </article>
  );
});

export default SpecificStock;
