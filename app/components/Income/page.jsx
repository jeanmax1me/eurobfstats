import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import useSharedState from '../useSharedState'; // Import the shared state hook

export default function Income() {
  const { minIncome, setMinIncome } = useSharedState(); // Get the minIncome and setMinIncome from shared state

  // Function to handle changes in the minimum income selection
  const handleMinIncomeChange = (value) => {
    setMinIncome(value);
  };

  return (
    <RadioGroup 
      className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
      label="Select his minimum income" 
      orientation="horizontal"
      onChange={handleMinIncomeChange} // Update shared state on change
    >
      <Radio value="15000">€15,000 per year</Radio>
      <Radio value="20000">€20,000 per year</Radio>
      <Radio value="25000">€25,000 per year</Radio>
      <Radio value="30000">€30,000 per year</Radio>
      <Radio value="40000">€40,000 per year</Radio>
      <Radio value="50000">€50,000 per year</Radio>
      <Radio value="60000">€60,000 per year</Radio>
      <Radio value="75000">€75,000 per year</Radio>
      <Radio value="100000">€100,000 per year</Radio>
      <Radio value="150000">€150,000 per year</Radio>
      <Radio value="200000">€200,000 per year</Radio>
      <Radio value="250000">€250,000 per year</Radio>
      <Radio value="300000">€300,000 per year</Radio>
      <Radio value="400000">€400,000 per year</Radio>
      <Radio value="500000">€500,000 per year</Radio>
    </RadioGroup>
  );
}
