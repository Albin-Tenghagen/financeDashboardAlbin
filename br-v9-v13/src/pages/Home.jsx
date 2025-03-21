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
import AppleStock from "../components/ApplestockChange/AppleStock";
import BusinessNewsSection from "../components/BusinessNews/BusinessNewsSection";
import { useState } from "react";
import nasdaqCompanies from "../components/CompanyFolder/NasdaqCompanies";

function Home() {
  const [showCompanies, setShowCompanies] = useState(false);

  function nasdaqDropdown() {
    setShowCompanies(!showCompanies); // toggle open/close
  }

  function fetchStock() {}
  return (
    <main className="flex flex-col justify-center items-center bg-[#faebd7]">
      <p className="opacity-0">Denna sida suckaaaasssss</p>
      <AppleStock />
      <button
        onClick={nasdaqDropdown}
        className="flex items-center justify-start gap-2 text-xl font-semibold rounded-2xl px-4 py-3 m-2 mb-20 bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
      >
        {showCompanies ? "Hide NASDAQ stocks" : "Show more NASDAQ stocks"}
        <img
          className="w-8 h-8"
          src={showCompanies ? "/Icons/Arrow-up.png" : "/Icons/Arrow-down.png"}
          alt=""
        />
      </button>
      {showCompanies && (
        <ul className="w-11/12 flex flex-row flex-wrap items-center justify-center">
          {nasdaqCompanies
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((company) => (
              <li
                tabIndex="0"
                className="text-xl font-semibold rounded-2xl px-4 py-3 m-2  bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
                onClick={fetchStock()}
                key={company.name}
              >
                {company.name}
              </li>
            ))}
        </ul>
      )}
      <BusinessNewsSection />
    </main>
  );
}

export default Home;
