import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';


const defaulUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaulUsers, action) => {
  const { type, user } = action;
  switch (type) {
    case ADD_USER:
      return { ...users, [user.id]: user };
    default:
      return users;
  }
};
