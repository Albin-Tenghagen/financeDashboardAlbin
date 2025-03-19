import HistoricalPrices from "../components/stocksAndAnalyses/HistoricalPrices";
import FinancialHealthIndicator from "../components/stocksAndAnalyses/FinancialHealthIndicator";
import HistoricalComparisonComponent from "../components/stocksAndAnalyses/HistoricalComparisonComponent";
/**
 * StocksAndAnalyses.jsx
 *
 * This is the main layout wrapper for the Stocks & Analyses section.
 * It renders a composition of key financial data visualization components.
 *
 * Components rendered:
 * - <HistoricalPrices /> — Displays historical stock price chart.
 * - <HistoricalComparisonComponent /> — Shows a line chart for various financial ratios.
 * - <FinancialHealthIndicator /> — Highlights key financial health metrics using color indicators.
 *
 * Layout:
 * - Flex-based responsive layout with vertical stacking on mobile and horizontal alignment on larger screens.
 */
function StocksAndA() {
  return (
    <main className="flex flex-col w-full bg-[#faebd7]">
      <section className="mt-10 mb-25">
        <HistoricalPrices />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center mb-15">
        <HistoricalComparisonComponent />
        <FinancialHealthIndicator />
      </section>
    </main>
  );
}
export default StocksAndA;
