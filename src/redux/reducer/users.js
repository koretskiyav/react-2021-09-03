import { normalizedUsers as defaultUsers } from '../../fixtures';
const defaultNormalizedUsers = defaultUsers.reduce((acc, user) => ({...acc, [user.id]:user}), {});
export default (users = defaultNormalizedUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
