import { useContext } from 'react';
import { currencyContext } from '../../contexts/currency-context';

const Currency = ({ value }) => {
  const {currency} = useContext(currencyContext);
  let delimeter = 1;
  if(currency === '€') {
    delimeter = 1.24
  }
  if (currency === '￡') {
    delimeter = 1.44
  }

  return (`${value/delimeter} ${currency}`);
}
export default Currency;