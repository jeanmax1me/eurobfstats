import React, { createContext, useContext, useReducer } from 'react';

// Define action types
const SET_MIN_AGE = 'SET_MIN_AGE';
const SET_MAX_AGE = 'SET_MAX_AGE';
const SET_MARRIED = 'SET_MARRIED';
const SET_MIN_HEIGHT = 'SET_MIN_HEIGHT';
const SET_MIN_LOOKS = 'SET_MIN_LOOKS';
const SET_MIN_INCOME = 'SET_MIN_INCOME';

const initialState = {
  minAge: '',
  maxAge: '',
  married: false,
  minHeight: '',
  minLooks: '',
  minIncome: '',
};

// Define your reducer function (appReducer) here
const appReducer = (state, action) => {
  switch (action.type) {
    case SET_MIN_AGE:
      return { ...state, minAge: action.payload };
    case SET_MAX_AGE:
      return { ...state, maxAge: action.payload };
    case SET_MARRIED:
      return { ...state, married: action.payload };
    case SET_MIN_HEIGHT:
      return { ...state, minHeight: action.payload };
    case SET_MIN_LOOKS:
      return { ...state, minLooks: action.payload };
    case SET_MIN_INCOME:
      return { ...state, minIncome: action.payload };
    default:
      return state;
  }
};

// Create a context for your state
const AppContext = createContext(initialState);

// Create a provider component that will wrap your app
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Create action creators
export const setMinAge = (minAge) => ({
  type: SET_MIN_AGE,
  payload: minAge,
});

export const setMaxAge = (maxAge) => ({
  type: SET_MAX_AGE,
  payload: maxAge,
});

export const setMarried = (married) => ({
  type: SET_MARRIED,
  payload: married,
});

export const setMinHeight = (minHeight) => ({
  type: SET_MIN_HEIGHT,
  payload: minHeight,
});

export const setMinLooks = (minLooks) => ({
  type: SET_MIN_LOOKS,
  payload: minLooks,
});

export const setMinIncome = (minIncome) => ({
  type: SET_MIN_INCOME,
  payload: minIncome,
});

// Create a custom hook to access the context
export const useAppContext = () => {
  return useContext(AppContext);
};