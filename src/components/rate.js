import { ReactComponent as Star } from '../icons/star.svg';
import style from './rate.module.css';

export default function Rate({ value }) {
  function createArrayRates(value) {
    let rates = [];
    for (let i = 1; i <= value; i++) {
      if (i > 5) {
        break;
      }
      rates.push(i);
    }
    return rates;
  }

  return (
      <div>
        {createArrayRates(value).map((rate) => (
          <Star className={style.rate} key={rate} />
        ))}
      </div>
    );
}
