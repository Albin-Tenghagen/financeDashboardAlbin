import Navbar from "../Navbar/Navbar";
/**
 * This component acts as the header for the application. It has the title if the app and has a children component NavBar. That houses the navigation for this app
 */
function Header() {
  return (
    <header className="w-full min-h-[150px] max-h-[300px] flex flex-col md:flex-row bg-secondary items-center justify-between p-4">
      <h1 className="font-title text-4xl font-semibold md:text-5xl  ml-2 ">
        Apple Dashboard
      </h1>
      <Navbar />
    </header>
  );
}
export default Header;
