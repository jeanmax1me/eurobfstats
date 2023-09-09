import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import useSharedState from '../useSharedState'; // Update the import path to match your project structure

export default function Looks() {
  const { minLooks, setMinLooks } = useSharedState();

  const handleMinLooksChange = (value) => {
    setMinLooks(value);
  };

  return (
    <RadioGroup
      className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
      label="Select his minimum physical rating"
      orientation="horizontal"
      onChange={handleMinLooksChange} // Update the shared state when an option is selected
    >
      <Radio value="1">Very Unattractive (1)</Radio>
      <Radio value="2">Unattractive (2)</Radio>
      <Radio value="3">Below Average (3)</Radio>
      <Radio value="4">Slightly Below Average (4)</Radio>
      <Radio value="5">Average (5)</Radio>
      <Radio value="6">Slightly Above Average (6)</Radio>
      <Radio value="7">Above Average (7)</Radio>
      <Radio value="8">Attractive (8)</Radio>
      <Radio value="9">Very Attractive (9)</Radio>
      <Radio value="10">Extremely Attractive (10)</Radio>
    </RadioGroup>
  );
}
