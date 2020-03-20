import { GraphQLError } from 'graphql';

export const validateValue = value => {
  if (isNaN(Date.parse(value))) {
    throw new GraphQLError(`Query error: not a valid date`, [value]);
  }
};
