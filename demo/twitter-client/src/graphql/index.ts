import { gql } from "apollo-boost";

export const GET_HOME_DATA = gql`
  {
    currentUser: User(id: 1) {
      fullName
      username
      lastName
      firstName
      avatarUrl
    }
    tweets: Tweets {
      id
      body
      date
      Author {
        username
        fullName
      }
      Stats {
        likes
        retweets
        responses
      }
    }
  }
`;
