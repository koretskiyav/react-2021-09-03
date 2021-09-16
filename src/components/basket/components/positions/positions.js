import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { restaurants } from '../../../../fixtures';
import Product from './product';

const Positions = ({ order }) => {
  const orderMassive = useMemo(() => Object.entries(order), [order]);

  const menu = useMemo(() => restaurants.reduce((all, curRestaurant) =>
      [...all, ...(curRestaurant.menu)]
    , []), [restaurants]);

  const price = useMemo(() => {
    let pr = 0;
    orderMassive.map((elem) => {
      const curr = menu.find(({ id, price }) => id === elem[0]);
      pr += curr.price * elem[1];
    });
    return pr;
  }, [orderMassive]);

  return (
    <div>
      <h1>Итого</h1>
      <h3>{price} $</h3>
      <div>
        <h2>Позиции</h2>
        {orderMassive.map((elem) => {
          const curr = menu.find((product) => product.id === elem[0]);

           if(elem[1]>0)
             return (
               <Product key={curr.id} product={curr} />
             );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  order: state.order
});

export default connect(mapStateToProps)(Positions);