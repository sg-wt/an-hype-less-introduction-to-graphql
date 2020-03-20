import { tweets, Tweet, users, User, stats } from '../db';
import { GraphQLScalarType, GraphQLError, Kind } from 'graphql';
import { validateValue } from '../utils';

export const resolvers = {
  // Queries
  Query: {
    Tweet: (_, { id }) => tweets.find(tweet => tweet.id == id),
    Tweets: () => tweets,
    User: (_, { id }) => users.find(user => user.id == id),
  },
  // In the absence of a field resolver, GraphQL falls back to a simple object lookup.
  Tweet: {
    id: (tweet: Tweet) => tweet.id,
    body: (tweet: Tweet) => tweet.body,
    Author: (tweet: Tweet) => users.find(user => user.id == tweet.authorId),
    Stats: (tweet: Tweet) => stats.find(stat => stat.tweetId == tweet.id),
  },
  User: {
    fullName: (user: Partial<User>) => `${user.firstName} ${user.lastName}`,
  },

  // Mutations
  Mutation: {
    createTweet: (_, { body }) => {
      const tweetId: number =
        tweets.reduce((id, tweet) => {
          return Math.max(id, tweet.id);
        }, -1) + 1;

      const newTweet: Tweet = {
        id: tweetId,
        date: new Date(),
        authorId: 1,
        body,
      };
      tweets.push(newTweet);
      return newTweet;
    },
  },

  // Custom Scale Types
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date type',
    parseValue(value) {
      validateValue(value);
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(
          `Query error: Can only parse dates strings, got a: ${ast.kind}`,
          [ast],
        );
      }
      validateValue(ast.value);
      return new Date(ast.value);
    },
    serialize(value) {
      return value.toISOString();
    },
  }),
};
