import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce(
  (acc, product) => ({ ...acc, [product.id]: product }),
  {}
);

export default (products = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
