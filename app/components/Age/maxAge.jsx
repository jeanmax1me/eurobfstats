import React, { useState, useEffect } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useAppContext, setMaxAge } from "../AppContext";

export default function Age() {
    const { state, dispatch } = useAppContext();
    const { maxAge } = state;
    const availableAges = ["18", "20", "25", "30", "35", "40", "45", "50", "60"];
    const selectedIndex = availableAges.indexOf(maxAge);
    const [selectedAgeIndex, setSelectedAgeIndex] = useState(selectedIndex);

    useEffect(() => {
        setSelectedAgeIndex(selectedIndex);
    }, [maxAge, selectedIndex]);

    const handleMaxAgeChange = (index) => {
        const selectedAge = availableAges[index];
        setSelectedAgeIndex(index);

        // Dispatch the action to update maxAge
        dispatch(setMaxAge(selectedAge));
    };

    useEffect(() => {
        console.log("maxAge changed:", maxAge);
    }, [maxAge]);

    return (
        <RadioGroup
            label="Select his maximum age"
            orientation="horizontal"
            className="custom-radio-group bg-[#E7F1FE] rounded-2xl p-3"
        >
            {availableAges.map((age, index) => (
                <Radio
                    key={age}
                    value={age}
                    data-selected={index === selectedAgeIndex}
                    onChange={() => handleMaxAgeChange(index)}
                >
                    {age}
                </Radio>
            ))}
        </RadioGroup>
    );
}
