import React from 'react';
import Banner from '../banner';
import  Positions  from './components/positions';

export const Basket = () => {
  return (
    <div>
      <Banner heading='Корзина'/>
      <Positions/>
    </div>
  );
};
