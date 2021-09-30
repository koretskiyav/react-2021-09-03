import { createContext } from "react";

const context = createContext();

const CurrencyContextProvider = context.Provider;

export { context as default, CurrencyContextProvider }