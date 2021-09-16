import { useMemo } from 'react';
import { connect } from 'react-redux';
import BasketItem from './basketItem';


const Basket = ({orders,products}) => {
  const prouctsForBasket = useMemo(() => {
    const productsId =  Object.keys(orders).filter( (id) => orders[id] > 0); 
      return productsId.map( (id)=> ({id, product: products[id], ammount: orders[id] }));
  }, [products, orders]);

  const totalCost = useMemo(() => {
    return  Object.keys(orders).filter( (id) => orders[id] > 0).map( (id)=> (products[id].price * orders[id] )).reduce((acc,current) => acc+current,0); 
  }, [products, orders]);

  return (

    <div>
          {prouctsForBasket.map((item) => (
            <BasketItem key={item.id} product={item.product} amount = {item.ammount} />
          ))}
          <h4>Total: {totalCost}</h4>
    </div>

  );
}

const mapStateToProps = (state, props) => ({
  orders: state?.order ?? {},
  products: state?.product ?? {},
});


export default connect(mapStateToProps)(Basket);
