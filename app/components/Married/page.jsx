'use client';
import React, { useState, useEffect } from 'react';
import { Checkbox } from "@nextui-org/react";
import { useAppContext, setMarried } from '../AppContext';

const Married = () => {
  const { state, dispatch } = useAppContext();
  const { married } = state;

  const [isChecked, setIsChecked] = useState(married);

  // Function to handle changes in the married checkbox
  const handleMarriedChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    // Dispatch the action to update married status
    dispatch(setMarried(checked));
  };

  useEffect(() => {
    console.log("married changed:", married);
  }, [married]);

  return (
    <div className="marriedmen">
      <label className="married-checkbox-label">
        <Checkbox 
          checked={isChecked}
          onChange={handleMarriedChange} // Update local state on change
        /> Include married men?
      </label>
    </div>
  );
};

export default Married;
