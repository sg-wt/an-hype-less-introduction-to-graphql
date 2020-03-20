/*

    TWEETS

*/

export type Tweet = {
  id: number;
  body: string;
  date: Date;
  authorId: number;
};

export const tweets: Tweet[] = [
  {
    id: 1,
    body: 'Lorem Ipsum',
    date: new Date(),
    authorId: 1,
  },
  {
    id: 2,
    body: 'Ipsum Lorem',
    date: new Date(),
    authorId: 2,
  },
];

/*

    AUTHORS

*/

export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  avatarUrl: string;
};

export const users: User[] = [
  {
    id: 1,
    username: 'jdupont',
    firstName: 'Jules',
    lastName: 'Dupont',
    avatarUrl: 'https://api.adorable.io/avatars/285/random.png',
  },
  {
    id: 2,
    username: 'jclaude',
    firstName: 'Jean-Claude',
    lastName: 'Dupond',
    avatarUrl: 'https://api.adorable.io/avatars/285/me.png',
  },
];

export type Stat = {
  tweetId: number;
  likes: number;
  retweets: number;
  responses: number;
};

export const stats: Stat[] = [
  { tweetId: 1, likes: 128, retweets: 1, responses: 0 },
  { tweetId: 2, likes: 9, retweets: 63, responses: 6 },
];
