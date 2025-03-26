import { useEffect, useState, memo } from "react";

import NasdaqCompanies from "../CompanyFolder/NasdaqCompanies";
import { fetchStockPriceChange } from "../../Reducers/stockSlice";
import { useDispatch, useSelector } from "react-redux";
import SpecificStock from "./SpecificStock";

function NasdaqStockChange() {
  const dispatch = useDispatch();
  const { priceChanges, loading, error } = useSelector((state) => state.stock);

  const [showCompanies, setShowCompanies] = useState(false);
  const [companyCards, setCompanyCards] = useState([]);
  const [latestSymbol, setLatestSymbol] = useState("AAPL");
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
    if (!priceChanges[latestSymbol]) {
      dispatch(fetchStockPriceChange(latestSymbol));
    }
  }, [latestSymbol, dispatch]);

  const fetchStock = (symbol) => {
    console.log("Button clicked", symbol);
    if (!companyCards.includes(symbol)) {
      setCompanyCards((prev) => [...prev, symbol]);
      setLatestSymbol(symbol); // Track latest symbol for API call
    }
    setShowCompanies(false);
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <section className="w-full flex justify-center items-center lg:flex-row flex-wrap ">
        {Object.keys(priceChanges).length > 0 ? (
          Object.entries(priceChanges).map(([symbol, stock]) => (
            <SpecificStock key={symbol} stock={stock} />
          ))
        ) : (
          <h4 className="w-full text-center text-3xl md:text-4xl font-bold">
            Could not find the stock data you are looking for
          </h4>
        )}
      </section>
      <button
        onClick={nasdaqDropdown}
        className="flex card-hover-effect gap-2 text-xl font-text font-semibold rounded-2xl px-4 py-3 m-2 mb-[10rem] bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
      >
        {showCompanies ? "Hide NASDAQ stocks" : "Show more NASDAQ stocks"}
        <img
          className="w-8 h-8 font-text"
          src={showCompanies ? "/Icons/Arrow-up.png" : "/Icons/Arrow-down.png"}
          alt=""
        />
      </button>
      {showCompanies && (
        <ul className="w-11/12 flex flex-row flex-wrap items-center justify-center -mt-36 mb-16">
          {NasdaqCompanies.sort((a, b) => a.name.localeCompare(b.name)).map(
            (company) => (
              <li
                tabIndex="0"
                className=" card-hover-effect font-text text-xl font-semibold rounded-2xl px-4 py-3 m-2  bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
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
  );
}

export default NasdaqStockChange;
