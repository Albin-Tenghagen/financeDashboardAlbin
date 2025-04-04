import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKeyMetrics } from "../../Reducers/keyMetricsSlice";
/**
 * FinancialHealthIndicator.jsx
 *
 * This component displays color-coded financial health metrics
 * based on defined thresholds for each metric.
 *
 * Redux:
 * - Dispatches `fetchKeyMetrics()` on mount.
 * - Selects `data`, `status`, and `error` from `state.keyMetrics`.
 *
 * States handled:
 * - Loading: Shows loading message.
 * - Error: Shows error message.
 * - Empty: Shows fallback text.
 * - Success: Lists key metrics with conditional color styling.
 *
 * Features:
 * - Dynamically colors metrics (Green, Yellow, Red) based on thresholds.
 * - Metrics displayed: Current Ratio, Debt to Equity, ROE, Net Debt to EBITDA, Earnings Yield, Free Cash Flow Yield.
 */

const getIndicatorColor = (value, goodThreshold, warningThreshold) => {
  if (value >= goodThreshold) return "text-green-500";
  if (value >= warningThreshold) return "text-yellow-500";
  return "text-red-500";
};

function FinancialHealthIndicator() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.keyMetrics);

  useEffect(() => {
    dispatch(fetchKeyMetrics());
  }, [dispatch]);

  if (status === "loading") return <p>Loading financial metrics...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No financial data available</p>;

  const metrics = data[0];

  return (
    <section className="flex justify-center flex-col mt-8 md:mr-5 bg-[#fcfcfc] p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
      <h2 className="mb-4 text-m font-bold lg:text-xl">
        Financial Health Indicators
      </h2>
      <ul className="text-[15px] lg:text-[17px]">
        <li className={getIndicatorColor(metrics.currentRatio, 1.5, 1.0)}>
          Current Ratio: {metrics.currentRatio?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.debtToEquity, 1.0, 2.0)}>
          Debt to Equity: {metrics.debtToEquity?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.roe, 0.15, 0.1)}>
          Return on Equity (ROE): {(metrics.roe * 100)?.toFixed(2)}%
        </li>
        <li className={getIndicatorColor(metrics.netDebtToEBITDA, 2.0, 3.5)}>
          Net Debt to EBITDA: {metrics.netDebtToEBITDA?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.earningsYield, 0.05, 0.03)}>
          Earnings Yield: {(metrics.earningsYield * 100)?.toFixed(2)}%
        </li>
        <li
          className={getIndicatorColor(metrics.freeCashFlowYield, 0.05, 0.03)}
        >
          Free Cash Flow Yield: {(metrics.freeCashFlowYield * 100)?.toFixed(2)}%
        </li>
      </ul>
    </section>
  );
}

export default FinancialHealthIndicator;
