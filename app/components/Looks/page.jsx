'use client';
import React, { useState, useEffect } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useAppContext, setMinLooks } from '../AppContext'; // Import the context and action creator

export default function Looks() {
  const { state, dispatch } = useAppContext();
  const { minLooks } = state;

  const availableRatings = [
    { value: "1", description: "Very Unattractive (1)" },
    { value: "2", description: "Unattractive (2)" },
    { value: "3", description: "Below Average (3)" },
    { value: "4", description: "Slightly Below Average (4)" },
    { value: "5", description: "Average (5)" },
    { value: "6", description: "Slightly Above Average (6)" },
    { value: "7", description: "Above Average (7)" },
    { value: "8", description: "Attractive (8)" },
    { value: "9", description: "Very Attractive (9)" },
    { value: "10", description: "Extremely Attractive (10)" },
  ];

  const selectedIndex = availableRatings.findIndex((rating) => rating.value === minLooks);
  const [selectedRatingIndex, setSelectedRatingIndex] = useState(selectedIndex);

  useEffect(() => {
    setSelectedRatingIndex(selectedIndex);
  }, [minLooks, selectedIndex]);

  const handleMinLooksChange = (index) => {
    const selectedRating = availableRatings[index].value;
    setSelectedRatingIndex(index);

    // Dispatch the action to update minLooks
    dispatch(setMinLooks(selectedRating));
  };

  useEffect(() => {
    console.log("minLooks changed:", minLooks);
  }, [minLooks]);

  return (
    <RadioGroup
      className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
      label="Select his minimum physical rating"
      orientation="horizontal"
    >
      {availableRatings.map((rating, index) => (
        <Radio
          key={rating.value}
          value={rating.value}
          data-selected={index === selectedRatingIndex}
          onChange={() => handleMinLooksChange(index)}
        >
          {rating.description}
        </Radio>
      ))}
    </RadioGroup>
  );
}
