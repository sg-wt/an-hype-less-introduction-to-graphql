import React, { FunctionComponent, ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";

import { Header, TweetCard } from "./components";
import { Tweet } from "./typescript";
import { GET_HOME_DATA } from "./graphql";

import "./App.css";

const App: FunctionComponent = (): ReactElement => {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="App">
      <Header currentUser={data.currentUser} />
      {data.tweets.map((tweet: Tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default App;
