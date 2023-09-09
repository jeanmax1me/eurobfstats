import React from "react";

const ResultPage = ({ minAge, married, minHeight, minLooks, minIncome }) => {
  return (
    <div className="result-page">
      <h1>Results</h1>
      <p>Minimum Age: {minAge}</p>
      <p>Marital Status: {married}</p>
      <p>Minimum Height: {minHeight} cm</p>
      <p>Minimum Looks: {minLooks}</p>
      <p>Minimum Income: €{minIncome} per year</p>
      {/* You can add more information or calculations here */}
    </div>
  );
};

export default ResultPage;