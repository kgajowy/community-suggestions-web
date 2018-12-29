import * as React from "react";
import { User } from "../../../auth/user";
import { LinkElement } from "../LinkElement";

interface LogoutLinkProps {
  logOut: () => any;
  user: User;
}

export const LogoutLink: React.FunctionComponent<LogoutLinkProps> = ({
  logOut,
  user,
}) => (
  <LinkElement onClick={logOut}>
    Log out &nbsp; <img src={user.avatar.url} height="24px" width="24px" />
  </LinkElement>
);
