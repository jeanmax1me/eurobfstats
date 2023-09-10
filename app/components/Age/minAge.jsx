'use client';
import React, { useState, useEffect } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useAppContext, setMinAge } from "../AppContext";


export default function Age() {
    const { state, dispatch } = useAppContext();
    const { minAge } = state;
    const availableAges = ["18", "20", "25", "30", "35", "40", "45", "50", "60"];
    const selectedIndex = availableAges.indexOf(minAge);
    const [selectedAgeIndex, setSelectedAgeIndex] = useState(selectedIndex);

    useEffect(() => {
        setSelectedAgeIndex(selectedIndex);
    }, [minAge, selectedIndex]);

    const handleMinAgeChange = (index) => {
        const selectedAge = availableAges[index];
        setSelectedAgeIndex(index);

        // Dispatch the action to update minHeight
        dispatch(setMinAge(selectedAge));
    };

    useEffect(() => {
        console.log("minAge changed:", minAge);
    }, [minAge]);

    return (
        <RadioGroup
            label="Select his minimum age"
            orientation="horizontal"
            className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
        >
            {availableAges.map((age, index) => (
                <Radio
                    key={age}
                    value={age}
                    data-selected={index === selectedAgeIndex}
                    onChange={() => handleMinAgeChange(index)}
                >
                    {age}
                </Radio>
            ))}
        </RadioGroup>
    );
}
