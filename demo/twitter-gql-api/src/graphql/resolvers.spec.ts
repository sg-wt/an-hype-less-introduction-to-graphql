import { resolvers } from './resolvers';

describe('User.fullName', () => {
  it('Compute fullname', () => {
    const user = { firstName: 'Jules', lastName: 'Dupont' };
    expect(resolvers.User.fullName(user)).toEqual('Jules Dupont');
  });
});
