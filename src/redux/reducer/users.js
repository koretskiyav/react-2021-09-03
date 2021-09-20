import { normalizedUsers } from '../../fixtures';
import { ADDUSER } from '../constants';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  return {
    ...acc,
    [user.id]: user
  }
}, {})

export default (users = defaultUsers, action) => {
  const { type, id, name } = action;

  switch (type) {
    case ADDUSER:
      return {...users, [id]: {id, name}}
    default:
      return users;
  }
};
