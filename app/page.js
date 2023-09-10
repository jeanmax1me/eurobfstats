"use client";
import React from "react";
import MinAgeComponent from "./components/Age/minAge.jsx";
import MaxAgeComponent from "./components/Age/maxAge.jsx";
import MarriedComponent from "./components/Married/page";
import HeightComponent from "./components/Height/page";
import LooksComponent from "./components/Looks/page";
import IncomeComponent from "./components/Income/page";
import { Button } from "@nextui-org/react";
import { useAppContext } from "./components/AppContext";
import { calculateRarity } from "./calculationsb.js";


export default function Home() {
  const { state } = useAppContext();

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
      const rarityResult = calculateRarity(
        minAge,
        maxAge,
        married,
        minHeight,
        minLooks,
        minIncome
      );
      // Log the result
      console.log(`Rarity Result: ${rarityResult}`);
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
          <div className="flex flex-wrap gap-4 items-center text-white results">
          <p>Min Age: {state.minAge}</p>
<p>Max Age: {state.maxAge}</p>
        <p>Married: {state.married ? "Yes" : "No"}</p>
        <p>Min Height: {state.minHeight}</p>
        <p>Min Looks: {state.minLooks}</p>
        <p>Min Income: {state.minIncome}</p>
      </div>
        </div>
      </div>
    </div>
  );
}