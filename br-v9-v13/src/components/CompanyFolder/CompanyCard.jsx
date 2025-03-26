import React from "react";
/**
 * CompanyCard.jsx
 *
 * Displays detailed information for a selected company.
 * Includes a close button to remove the card from view.
 *
 * Props:
 * @param {Object} company - The company object with profile data
 * @param {function} removeCompany - Function to remove this company
 */

function CompanyCard({ company, removeCompany }) {
  // function to limit description to 100 word and adds ... if its more than 100 words.
  const LimitDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 100) {
      return words.slice(0, 100).join(" ") + "...";
    }
    return description;
  };

  return (
    <article className="relative flex-basis-[250px] bg-accent p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg mt-10 mb-10 mr-2">
      {/* close button */}
      <button
        onClick={() => removeCompany(company.symbol)}
        className="button-focus-effect bg-interactive absolute top-2 right-2  rounded-full w-8 h-8 flex items-center justify-center transition transform hover:scale-110 shadow-lgs"
      >
        <img className="w-8 h-8" src="/Icons/remove-add-dark/X.png" alt="" />
      </button>

      <h2 className="text-xl font-bold mb-2">{company.companyName}</h2>
      <p>
        <strong>Sector:</strong> {company.sector}
      </p>
      <p>
        <strong>Country:</strong> {company.country}
      </p>
      <p>
        <strong>Market Cap:</strong> ${company.mktCap}
      </p>
      <p>
        <strong>Stock Price:</strong> ${company.price}
      </p>
      <p>
        <strong>Description:</strong> {LimitDescription(company.description)}
      </p>
      <img
        src={company.image}
        alt={company.companyName}
        className="mx-auto w-40 sm:w-36 md:w-42 lg:w-50 xl:w-50 mt-4"
      />
    </article>
  );
}

export default CompanyCard;
