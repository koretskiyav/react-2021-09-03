

import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';

const Currency = ({ children }) => {
  const [currency, setCurrency] = useState("RUR");
  const currencyRates = { "RUR": 75, "EUR": 0.8823, "USD": 1, };
  const currencyList = ["RUR", "USD", "EUR"];
  const calcPrice = (price) => Math.round(price * currencyRates[currency]);
  return (
    <div>
      <UserProvider value={{ currency, setCurrency, calcPrice, currencyList }}>
        {children}
      </UserProvider>
    </div>
  );
};

export default Currency;