import { v4 as uuidv4 } from 'uuid';
export default (store) => (next) => (action) => {
  next(action);
  console.log(uuidv4());
};
