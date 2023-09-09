import React from 'react';
import { Checkbox } from "@nextui-org/react";
import useSharedState from '../useSharedState'; // Import the shared state hook

const Page = () => {
  const { married, setMarried } = useSharedState(); // Get the married and setMarried from shared state

  // Function to handle changes in the married checkbox
  const handleMarriedChange = (checked) => {
    setMarried(checked);
  };

  return (
    <div className="marriedmen">
      <label className="married-checkbox-label">
        <Checkbox 
          defaultSelected={married} // Set the initial checked state from shared state
          onChange={handleMarriedChange} // Update shared state on change
        /> Include married men?
      </label>
    </div>
  );
};

export default Page;
