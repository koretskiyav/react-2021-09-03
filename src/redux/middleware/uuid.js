import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  let state = store.getState();
  state['user_id'] = uuidv4();
  next(action);
}