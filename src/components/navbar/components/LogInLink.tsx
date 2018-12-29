import * as React from "react";

import { default as ghMark } from "../../../assets/github.svg";
import { LinkElement } from "../LinkElement";

interface LogInLinkProps {
  logIn: () => any;
}

export const LoginLink: React.FunctionComponent<LogInLinkProps> = ({
  logIn,
}) => (
  <LinkElement onClick={logIn}>
    Log In &nbsp; <img src={ghMark} height="24px" width="24px" />
  </LinkElement>
);
