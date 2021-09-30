import { createContext } from "react";

const context = createContext();

const ConvertContextProvider = context.Provider;

export { context as default, ConvertContextProvider};