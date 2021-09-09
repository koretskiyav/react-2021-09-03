import { Fragment } from 'react';

import style from './rate.module.css';

import { ReactComponent as Star } from './../icons/star.svg';

export default function Rate({ value = 0 }) {
  const roundValue = Math.round(value);
  if (!roundValue) {
    return null;
  }

  const stars = Array.from(Array(roundValue).keys()).map((index) => (
    <Star key={index} className={style.star}></Star>
  ));

  return <Fragment>{stars}</Fragment>;
}
