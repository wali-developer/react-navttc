import { createContext, useReducer } from "react";
import counterReducer, { initialState } from "../reducers/counterReducer";

export const CounterContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
