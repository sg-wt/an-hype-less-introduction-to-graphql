export interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  avatarUrl: string;
}

export interface Tweet {
  id: number;
  date: Date;
  body: string;
  Author: User;
  Stats: Stat;
}

export interface Stat {
  views: number;
  likes: number;
  retweets: number;
  responses: number;
}
