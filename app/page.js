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
      <div className="header">EUROPEAN BOYFRIEND STATS</div>
      <div className="main-wrapper">
        <div className="container-minage">
          <MinAgeComponent />
        </div>
        <div className="container-maxage">
          <MaxAgeComponent />
        </div>
        <div className="container-married">
          <MarriedComponent />
        </div>
        <div className="container-height">
          <HeightComponent />
        </div>
        <div className="container-looks">
          <LooksComponent />
        </div>
        <div className="container-income">
          <IncomeComponent />
        </div>
        <div className="container-button flex flex-col items-center gap-5">
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              onClick={handleCalculateRarity}
              color="primary"
              variant="ghost"
            >
              Calculate Rarity
            </Button>
          </div>
          {showResultsPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg text-black">
                <h2 className="text-lg font-semibold mb-4 text-center">Results</h2>
                <p className="mb-2">Rarity Percentage: {results.rarityPercentage}%</p>
                <p className="mb-4">Rarity Fraction: {results.rarityFraction}</p>
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
