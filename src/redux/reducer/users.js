import { normalizedUsers } from '../../fixtures';
import { ADDUSER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, users) => ({ ...acc, [users.id]: users }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, user } = action;

  switch (type) {
    case ADDUSER:
      return {...users, [user.id]: user}
    default:
      return users;
  }
};
