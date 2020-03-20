import React, { FunctionComponent } from "react";
import { Card, Avatar, CardContent, Typography } from "@material-ui/core";
import { ChatBubbleOutline, Cached, FavoriteBorder } from "@material-ui/icons";

import { Tweet } from "../typescript";

interface Props {
  tweet: Tweet;
}

export const TweetCard: FunctionComponent<Props> = ({ tweet }) => {
  return (
    <Card>
      <CardContent>
        <div style={{ display: "flex" }}>
          <Avatar src={tweet.Author.avatarUrl} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1em"
            }}
          >
            <span>{tweet.Author.fullName}</span>
            <span>{tweet.Author.username}</span>
          </div>
        </div>
        <div style={{ marginTop: "1em", marginBottom: "1em" }}>
          <Typography component="p">{tweet.body}</Typography>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1em"
            }}
          >
            <div>
              <ChatBubbleOutline />
              <span>{tweet.Stats.responses}</span>
            </div>
            <div>
              <Cached />
              <span>{tweet.Stats.retweets}</span>
            </div>
            <div>
              <FavoriteBorder />
              <span>{tweet.Stats.likes}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
