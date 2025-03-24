import { Link } from "react-router-dom";
/**
 * This component displays a footer for the website that with react-router-dom shows shortcuts to the pages of the application.
 * It also has links to the creators GitHub and Linkedin profiles.
 * React Router DOM:
 * - Links used for shortcuts to different pages
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary text-black py-4">
      {/* Grid Layout for footer sections */}
      <section className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Shortcuts Section */}
        <article className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mt-2 mb-2 font-title">
            Shortcuts
          </h4>
          <Link
            to="/"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Home
          </Link>
          <Link
            to="StocksAndA"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Stocks And Analyses
          </Link>
          <Link
            to="Company"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Company
          </Link>
        </article>
        {/* GitHub Links Section */}
        <article className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mt-2 mb-2 flex items-center font-title">
            <img
              className="w-6 h-6 mr-2"
              src="/Icons/links-light/Github.png"
              alt="Git icon"
            />
            Github
          </h4>
          <a
            href="https://github.com/Albin-Tenghagen"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Albin
          </a>
          <a
            href="https://github.com/ThaisonL"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Phi-Thai
          </a>
          <a
            href="https://github.com/Samii02"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Sami
          </a>
        </article>
        {/* LinkedIn Links Section */}
        <article className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mt-2 mb-2 flex items-center font-title">
            <img
              className="w-6 h-6 mr-2"
              src="/Icons/links-light/Linkedin.png"
              alt="Linkedin icon"
            />
            Linkedin
          </h4>
          <a
            href="https://www.linkedin.com/in/albin-tenghagen-980685211/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Albin
          </a>
          <a
            href="https://www.linkedin.com/in/phi-thai-lai-299968330/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Phi-Thai
          </a>
          <a
            href="https://www.linkedin.com/in/sami-al-halabi-1aab76329/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-effect hover:text-blue-200 block mt-2 mb-2 font-text"
          >
            Sami
          </a>
        </article>
        {/* Trademark Section */}
        <article className="flex flex-col items-center lg:col-span-1">
          <h4 className="text-lg font-semibold mt-2 mb-2 font-title">
            Trademark
          </h4>
          <p className="mt-2 mb-2 font-text">Trady Lady</p>
          <p className="mt-2 mb-2 font-text">Owns our soul</p>
          <p className="mt-3 mb-3 font-text">© {currentYear}</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
