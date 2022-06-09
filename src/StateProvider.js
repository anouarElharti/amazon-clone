import React, { createContext, useContext, useReducer } from "react";

// Preparing the dataLayer
export const StateContext = createContext();

// Wrapping the app, sharing the state through the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Using the data from our dataLayer
export const useStateValue = () => useContext(StateContext);
