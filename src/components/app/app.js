import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';
import Error from "../error";
import { ConvertContextProvider } from '../../contexts/convert-context';
import  style  from "./app.style.module.css";

const App = () => {
  const [name, setName] = useState('Andrey');

  const [currency, changeCurrency] = useState('$');

  const converter = {
    "$": (value) => value + " $",
    "₽": (value) => Math.trunc(value * 72.65) + " ₽",
    "€": (value) => Math.trunc(value * 0.86) + " €",
    "£": (value) => Math.trunc(value * 0.74) + " £",
  }


  return (
    <div>
      <div className={style.chooseCurrencyMenu}>
        {"Currency: "}
        <select  onInput={(event) => changeCurrency(event.target.value)}>
          <option selected={currency === "$"} value="$">Dollar $</option>
          <option selected={currency === "₽"} value="₽">Rouble ₽</option>
          <option selected={currency === "€"} value="€">Euro €</option>
          <option selected={currency === "£"} value="£">Pound £</option>
        </select>
      </div>
      <ConvertContextProvider value={converter[currency]}>
      <UserProvider value={{ name, setName }}>
         <Header />
         <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={Error} />
            <Route path="/thanks" component={() => <h2>Спасибо за заказ</h2>} />
            <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
         </Switch>
       </UserProvider>
      </ConvertContextProvider>
    </div>
  );
};

export default App;
