import React, { useEffect } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { ages } from './agegroups';
import useSharedState from '../useSharedState';

export default function App() {
    const {
        minAge,
        setMinAge,
        maxAge,
        setMaxAge,
    } = useSharedState();

    // Log the selected values when they change
    useEffect(() => {
        console.log("Minimum Age:", minAge);
        console.log("Maximum Age:", maxAge);
    }, [minAge, maxAge]);

    return (
        <div className="flex flex-wrap gap-4 agediv">
            <Select
                isRequired
                color="primary"
                label="Minimum Age Range"
                placeholder="Select a minimum age"
                className="max-w-xs"
                value={minAge}
                onChange={setMinAge} // Use setMinAge directly from the hook
            >
                {ages.map((age) => (
                    <SelectItem key={age.value} value={age.value}>
                        {age.label}
                    </SelectItem>
                ))}
            </Select>

            <Select
                isRequired
                color="primary"
                label="Maximum Age Range"
                placeholder="Select a maximum age"
                className="max-w-xs"
                value={maxAge}
                onChange={setMaxAge} // Use setMaxAge directly from the hook
            >
                {ages.map((age) => (
                    <SelectItem key={age.value} value={age.value}>
                        {age.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
