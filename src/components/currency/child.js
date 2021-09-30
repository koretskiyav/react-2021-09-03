
import { useContext } from 'react';
import { userContext } from '../../contexts/user-context';
const Child = () => {
  const { currency, setCurrency, calcPrice } = useContext(userContext);
  setCurrency('USD');
  return (
    <div>
      !!!!! {calcPrice(100)};
    </div>
  );
};

export default Child;