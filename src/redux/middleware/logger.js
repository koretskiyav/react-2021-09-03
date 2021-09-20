export default (store) => (next) => (action) => {
  console.log('before: ', store.getState());
  console.log('action: ', action.type);
  next(action);
  console.log('after: ', store.getState());
};
