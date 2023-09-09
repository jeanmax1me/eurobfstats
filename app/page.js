'use client';
import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import AgeComponent from "./components/Age/page";
import MarriedComponent from "./components/Married/page";
import HeightComponent from "./components/Height/page";
import LooksComponent from "./components/Looks/page";
import IncomeComponent from "./components/Income/page";
import ButtonComponent from "./components/Button/page";
import ResultPage from "./ResultPage"; // Import the ResultPage component
import useSharedState from "./components/useSharedState";

export default function Home() {
  const {
    minAge,
    setMinAge,
    maxAge, 
    setMaxAge, 
    married,
    setMarried,
    minHeight,
    setMinHeight,
    minLooks,
    setMinLooks,
    minIncome,
    setMinIncome,
  } = useSharedState();

  // State variable to determine if the result page should be shown
  const [showResult, setShowResult] = useState(false);

  return (
    <NextUIProvider>
      <div className="header">EUROPEAN BOYFRIEND STATS</div>
      <div className="main-wrapper">
        {/* Conditionally render the ResultPage */}
        {showResult ? (
          <ResultPage
            minAge={minAge}
            married={married}
            minHeight={minHeight}
            minLooks={minLooks}
            minIncome={minIncome}
          />
        ) : (
          <>
            <div className="container-age">
              <AgeComponent
                minAge={minAge}
                setMinAge={setMinAge}
                maxAge={maxAge}
                setMaxAge={setMaxAge}
              />
            </div>
            <div className="container-married">
              <MarriedComponent married={married} setMarried={setMarried} />
            </div>
            <div className="container-height">
              <HeightComponent minHeight={minHeight} setMinHeight={setMinHeight} />
            </div>
            <div className="container-looks">
              <LooksComponent minLooks={minLooks} setMinLooks={setMinLooks} />
            </div>
            <div className="container-income">
              <IncomeComponent minIncome={minIncome} setMinIncome={setMinIncome} />
            </div>
            <div className="container-button">
              <ButtonComponent />
            </div>
          </>
        )}
      </div>
    </NextUIProvider>
  );
}
