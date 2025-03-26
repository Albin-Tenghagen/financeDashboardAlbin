/**
 * Home.jsx
 *
 * This is the main landing page component for the application.
 * It displays key components such as the Apple stock overview and business news.
 *
 * Components used:
 * - <NasdaqStockChange />: Fetches and renders the stock change of any NASDAQ stock available.
 * - <BusinessNewsSection />: Fetches and renders the latest business/economic news articles.
 *
 * Layout:
 * - Wrapped in a flex container with centered alignment and a light background color.
 * - Includes a visually hidden `<p>` for a developer "Easter Egg".
 */
import NasdaqStockChange from "../components/AppleStockChange/NasdaqStockChange";
import BusinessNewsSection from "../components/BusinessNews/BusinessNewsSection";
function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-primary">
      <p className="opacity-0 hidden">Denna sida suckaaaasssss</p>

      <NasdaqStockChange />
      <BusinessNewsSection />
    </main>
  );
}

export default Home;
