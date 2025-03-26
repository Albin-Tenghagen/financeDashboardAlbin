import { useEffect, useState, memo } from "react";

import NasdaqCompanies from "../CompanyFolder/NasdaqCompanies";
import { fetchStockPriceChange } from "../../Reducers/stockSlice";
import { useDispatch, useSelector } from "react-redux";
import SpecificStock from "./SpecificStock";
/**
 * NasdaqStockChange.jsx
 * This component manages and displays stock price changes for selected NASDAQ companies.
 * It allows users to fetch and view stock data, select additional stocks, and handle notifications.
 *
 * Redux:
 * - Uses `useDispatch` to fetch stock price changes via `fetchStockPriceChange`.
 * - Uses `useSelector` to access `priceChanges` from the Redux store.
 *
 * States handled:
 * - `showCompanies`: Controls whether the NASDAQ company list dropdown is visible.
 * - `companyCards`: Stores the selected companies to display.
 * - `snackbar`: Displays notifications when a stock is searched or already selected.
 */
function NasdaqStockChange() {
  const dispatch = useDispatch();
  const { priceChanges } = useSelector((state) => state.stock);

  const [companyCards, setCompanyCards] = useState(["AAPL"]);
  const [showCompanies, setShowCompanies] = useState(false);
  const [snackbar, setSnackBar] = useState("");

  function nasdaqDropdown() {
    // setShowCompanies(true); // toggle open/close
    console.log(NasdaqCompanies);
    if (showCompanies === false) {
      setShowCompanies(true);
    } else {
      setShowCompanies(false);
    }
  }
  useEffect(() => {
    // Dispatch fetch only for companies that aren't already in the priceChanges
    companyCards.forEach((symbol) => {
      if (!priceChanges[symbol]) {
        dispatch(fetchStockPriceChange(symbol));
      }
    });
  }, [companyCards, dispatch, priceChanges]);
  useEffect(() => {
    console.log("Snackbar message:", snackbar);
    if (snackbar) {
      const timer = setTimeout(() => setSnackBar(""), 2000); // Clear notification after 3 seconds
      return () => clearTimeout(timer); // Cleanup to avoid memory leaks
    }
  }, [snackbar]);

  // Add the selected stock if it's not already added
  const fetchStock = (symbol) => {
    console.log("Snackbar message:", snackbar);
    if (!companyCards.includes(symbol)) {
      setCompanyCards((prev) => [...prev, symbol]);
      setSnackBar(`searching for ${symbol} stock!`);
    } else {
      setSnackBar(`${symbol} stock is already displayed!`);
    }
    setShowCompanies(false); // Close the dropdown after selection
  };

  const removeStock = (symbol) => {
    console.log("remove button klicked", symbol);
    setCompanyCards((prev) => prev.filter((stock) => stock !== symbol));
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-between">
      {snackbar && (
        <div className=" relative bg-active text-black font-text font-semibold rounded-2xl px-4 py-3 m-2  shadow-lg ease-in-out">
          {snackbar}
        </div>
      )}{" "}
      <section className="w-full h-auto flex-grow flex justify-center items-center lg:flex-row flex-wrap ">
        {companyCards.length > 0 ? (
          companyCards.map((symbol) =>
            priceChanges[symbol] ? (
              <SpecificStock
                key={symbol}
                stock={priceChanges[symbol]}
                removeStock={removeStock}
              />
            ) : null
          )
        ) : (
          <h4 className="w-full text-center text-3xl md:text-4xl font-bold">
            Press the button below to see NASDAQ stocks!
          </h4>
        )}
      </section>
      <section className="w-full flex justify-center items-center flex-col flex-wrap ">
        <button
          onClick={nasdaqDropdown}
          className="flex button-focus-effect gap-2 text-xl font-text font-semibold rounded-2xl px-4 py-3 m-2 mb-[5rem] bg-interactive cursor-pointer"
        >
          {showCompanies ? "Hide NASDAQ stocks" : "Show NASDAQ stocks"}
          <img
            className="w-8 h-8 "
            src={
              showCompanies ? "/Icons/Arrow-up.png" : "/Icons/Arrow-down.png"
            }
            alt=""
          />
        </button>
        {showCompanies && (
          <ul className="w-11/12 flex flex-row flex-wrap items-center justify-center mb-16">
            {NasdaqCompanies.sort((a, b) => a.name.localeCompare(b.name)).map(
              (company) => (
                <li
                  tabIndex="0"
                  className="button-focus-effect font-text text-xl font-semibold rounded-2xl px-4 py-3 m-2  bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
                  onClick={() => fetchStock(company.symbol)}
                  key={company.symbol}
                >
                  {company.symbol}
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </section>
  );
}

export default NasdaqStockChange;
