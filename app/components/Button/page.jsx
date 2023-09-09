import React from "react";
import {Button} from "@nextui-org/react";
import useSharedState from "../useSharedState";

export default function App() {
    const {
        minAge,
        maxAge, 
        married,
        minHeight,
        minLooks,
        minIncome,
      } = useSharedState();

    const handleCalculateRarity = () => {
        console.log("handleCalculateRarity activated");
        console.log("minAge:", minAge);
        console.log("maxAge:", maxAge);
        console.log("married:", married);
        console.log("minHeight:", minHeight);
        console.log("minLooks:", minLooks);
        console.log("minIncome:", minIncome);
      };


  return (
    <div className="flex flex-wrap gap-4 items-center"> 
      <Button onClick={handleCalculateRarity} color="primary" variant="ghost">
      Calculate Rarity
      </Button>   
    </div>
  );
}
