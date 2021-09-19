import { normalizedUsers } from '../../fixtures';


const defaulUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaulUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
