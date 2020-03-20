import React, { FunctionComponent, ReactElement } from "react";
import { AppBar, Toolbar, Avatar, Typography } from "@material-ui/core";

import { User } from "../typescript";

interface Props {
  currentUser: User;
}

export const Header: FunctionComponent<Props> = ({
  currentUser
}): ReactElement => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {currentUser ? <Avatar src={currentUser.avatarUrl} /> : null}
      </Toolbar>
    </AppBar>
  );
};
