'use client';
import React, { useState, useEffect } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useAppContext, setMinIncome } from '../AppContext'; // Import the context and action creator

export default function Income() {
  const { state, dispatch } = useAppContext();
  const { minIncome } = state;

  const availableIncomes = [
    "15000", "20000", "25000", "30000", "40000", "50000",
    "60000", "75000", "100000", "150000", "200000", "250000",
    "300000", "400000", "500000"
  ];

  const selectedIndex = availableIncomes.indexOf(minIncome);
  const [selectedIncomeIndex, setSelectedIncomeIndex] = useState(selectedIndex);

  useEffect(() => {
    setSelectedIncomeIndex(selectedIndex);
  }, [minIncome, selectedIndex]);

  const handleMinIncomeChange = (index) => {
    const selectedIncome = availableIncomes[index];
    setSelectedIncomeIndex(index);

    // Dispatch the action to update minIncome
    dispatch(setMinIncome(selectedIncome));
  };

  useEffect(() => {
    console.log("minIncome changed:", minIncome);
  }, [minIncome]);

  return (
    <RadioGroup 
      className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
      label="Select his minimum income" 
      orientation="horizontal"
    >
      {availableIncomes.map((income, index) => (
        <Radio
          key={income}
          value={income}
          data-selected={index === selectedIncomeIndex}
          onChange={() => handleMinIncomeChange(index)}
        >
          €{income} per year
        </Radio>
      ))}
    </RadioGroup>
  );
}
