/**
 * Home.jsx
 *
 * This is the main landing page component for the application.
 * It displays key components such as the Apple stock overview and business news.
 *
 * Components used:
 * - <AppleStock />: Displays the current stock changes for Apple.
 * - <BusinessNewsSection />: Fetches and renders the latest business/economic news articles.
 *
 * Layout:
 * - Wrapped in a flex container with centered alignment and a light background color.
 * - Includes a visually hidden `<p>` for a developer "Easter Egg".
 */
// import AppleStock from "../components/AppleStockChange/AppleStock";
import NasdaqStockChange from "../components/AppleStockChange/NasdaqStockChange";
import BusinessNewsSection from "../components/BusinessNews/BusinessNewsSection";
function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-primary">
      <p className="opacity-0">Denna sida suckaaaasssss</p>
      {/* <AppleStock /> */}
      <NasdaqStockChange />
      <BusinessNewsSection />
    </main>
  );
}

export default Home;
