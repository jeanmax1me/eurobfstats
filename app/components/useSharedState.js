// useSharedState.js
import { useState } from 'react';

const useSharedState = () => {
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [married, setMarried] = useState(true);
  const [minHeight, setMinHeight] = useState('');
  const [minLooks, setMinLooks] = useState('');
  const [minIncome, setMinIncome] = useState('');

  return {
    minAge,
    setMinAge,
    maxAge,
    setMaxAge,
    married,
    setMarried,
    minHeight,
    setMinHeight,
    minLooks,
    setMinLooks,
    minIncome,
    setMinIncome,
  };
};

export default useSharedState;
