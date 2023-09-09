import React, { useState, useEffect } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import useSharedState from "../useSharedState";

export default function Height() {
  const { minHeight, setMinHeight } = useSharedState();
  const availableHeights = ["160", "165", "170", "175", "180", "185", "190"];
  const selectedIndex = availableHeights.indexOf(minHeight);
  const [selectedHeightIndex, setSelectedHeightIndex] = useState(selectedIndex);

  useEffect(() => {
    setSelectedHeightIndex(selectedIndex);
  }, [minHeight, selectedIndex]);

  const handleMinHeightChange = (index) => {
    const selectedHeight = availableHeights[index];
    setSelectedHeightIndex(index);
    setMinHeight(selectedHeight);
    console.log("test", selectedHeight, minHeight);
  };

  useEffect(() => {
    console.log("minHeight changed:", minHeight);
  }, [minHeight]);

  return (
    <RadioGroup
      label="Select his minimum height"
      orientation="horizontal"
      className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
    >
      {availableHeights.map((height, index) => (
        <Radio
          key={height}
          value={height}
          data-selected={index === selectedHeightIndex}
          onChange={() => handleMinHeightChange(index)}
        >
          {height}cm
        </Radio>
      ))}
    </RadioGroup>
  );
}
