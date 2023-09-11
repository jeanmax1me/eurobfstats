"use client";
import React, { useState } from "react";
import MinAgeComponent from "./components/Age/minAge.jsx";
import MaxAgeComponent from "./components/Age/maxAge.jsx";
import MarriedComponent from "./components/Married/page";
import HeightComponent from "./components/Height/page";
import LooksComponent from "./components/Looks/page";
import IncomeComponent from "./components/Income/page";
import { Button } from "@nextui-org/react";
import { useAppContext } from "./components/AppContext";
import { calculateRarity } from "./calculations.js";
import FadeIn from "./components/FadeIn.jsx";

export default function Home() {
  const { state } = useAppContext();
  const [showResultsPopup, setShowResultsPopup] = useState(false);
  const [results, setResults] = useState({}); // Store the results

  // Function to show the popup
  const handleShowResultsPopup = () => {
    setShowResultsPopup(true);
  };

  // Function to hide the popup
  const handleHideResultsPopup = () => {
    setShowResultsPopup(false);
  };

  const handleCalculateRarity = () => {
    const {
      minAge,
      maxAge,
      married,
      minHeight,
      minLooks,
      minIncome,
    } = state;

    // Call the calculateRarity function with the required parameters
    const result = calculateRarity(
      minAge,
      maxAge,
      married,
      minHeight,
      minLooks,
      minIncome
    );

    // Set the results
    setResults(result);

    // Show the results popup
    handleShowResultsPopup();
  };

  return (
    <div>
      <div className="header">EUROPEAN BOYFRIEND RARITY</div>
      <div className="main-wrapper">
        <FadeIn duration={0.5}>
          <div className="container-minage">
            <MinAgeComponent />
          </div>
        </FadeIn>
        <FadeIn duration={0.7}>
          <div className="container-maxage">
            <MaxAgeComponent />
          </div>
        </FadeIn>
        <FadeIn duration={0.9}>
          <div className="container-married">
            <MarriedComponent />
          </div>
        </FadeIn>
        <FadeIn duration={1}>
          <div className="container-height">
            <HeightComponent />
          </div>
        </FadeIn>
        <FadeIn duration={1.1}>
          <div className="container-looks">
            <LooksComponent />
          </div>
        </FadeIn>
        <FadeIn duration={1.2}>
          <div className="container-income">
            <IncomeComponent />
          </div>
        </FadeIn>

        <div className="container-button flex flex-col items-center gap-5">

          <div className="flex flex-wrap gap-4 items-center">

            <Button
              size="lg"
              onClick={handleCalculateRarity}
              color="primary"
              variant="ghost"
            >
              Calculate Rarity
            </Button>
          </div>

          {showResultsPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-[#E7F1FE] p-8 rounded-3xl text-black h-3/4 w-1/3 popup">
                <div className="precisions">
                <h2 className="text-lg font-semibold mb-4 text-center">Precisions</h2>
                <h3 className="text-lg font-semibold mb-2">Age</h3>
                <p className="mb-2">The age range automatically includes the next number. For example, if you select a minimum age of 18 and a maximum age of 18, it will include individuals aged 18 to 19 but not those aged 20 and above.</p>
               <h3 className="text-lg font-semibold mb-2">Marriage</h3>
               <p className="mb-2">The likelihood of men being married tends to increase as they get older.</p>
               <h3 className="text-lg font-semibold mb-2">Looks</h3>
               <p className="mb-2">Looks are assessed based on a standard distribution, where the majority of people fall around the average. If someone rates 8 or above, they are roughly in the top 10% in terms of physical appearance.</p>
               <h3 className="text-lg font-semibold mb-2">Source</h3>
               <p className="mb-2">All the data is from <a>Eurostat</a>, the statistical office of the European Union</p>
               </div>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-center">Results</h2>
                <p className="text-lg mb-2 text-center">Rarity Percentage: {results.rarityPercentage}%</p>
                <p className="text-lg mb-6 text-center">Rarity Fraction: {results.rarityFraction}</p>
                <div className="flex justify-center">
                  <button
                    onClick={handleHideResultsPopup}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
