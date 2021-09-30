import { createContext, useState } from 'react';

export const UserContext = createContext('Default user');


const currencies = [
  { symbol: '$', exchange: 1 },
  { symbol: '€', exchange: 0.86 },
  { symbol: '₽', exchange: 72 },
  { symbol: '£', exchange: 0.74 },
  { symbol: '¥', exchange: 112 },
  { symbol: '₴', exchange: 26.6 },
];

export function UserContextProvider({ children }) {
  const [currencyId, setCurrency] = useState(0);
  const handleChangeCurrency = () => {
    setCurrency((currencyId + 1) % currencies.length);
  };
  const currencyPrice = (price) => {
    return `${Math.round(price * currencies[currencyId].exchange)} ${currencies[currencyId].symbol}`;
  };

  return (
    <UserContext.Provider
      value={{
        currencyPrice,
        handleChangeCurrency,
        currency: currencies[currencyId].symbol,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// export const UserConsumer = userContext.Consumer;
