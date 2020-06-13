import React, { createContext, useContext, useReducer } from 'react';
import { StateProviderProps } from '../types';

export const StateContext = createContext({} as any);
// export const Context = createContext<[IState, React.Dispatch<IAction>]>({} as IAction)

export const StateProvider = ({ reducer, initialState, children }: StateProviderProps) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
