import { createContext  } from "react";

export const currencyContext = createContext({
  currency: 'dollar',
  setCurrency: () => {},
  changeCurrency: () => {}
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;

