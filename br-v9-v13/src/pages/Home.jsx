import AppleStock from "../components/ApplestockChange/AppleStock";
import BusinessNewsSection from "../components/BusinessNews/BusinessNewsSection";
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
function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-[#faebd7]">
      <p className="opacity-0">Denna sida suckaaaasssss</p>

      <AppleStock />
      <BusinessNewsSection />
    </main>
  );
}

export default Home;
