import Navbar from "../Navbar/Navbar";
/**
 * This component acts as the header for the application. It has the title if the app and has a children component NavBar. That houses the navigation for this app
 */
function Header() {
  return (
    <header className="w-full h-28 flex flex-col md:flex-row bg-blue-600 items-center justify-between">
      <h1 className="text-4xl md:text-5xl text-white ml-2 ">Apple Dashboard</h1>
      <Navbar />
    </header>
  );
}
export default Header;
