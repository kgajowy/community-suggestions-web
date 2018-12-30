import * as React from "react";
import { NamespacesConsumer } from "react-i18next";

import { default as ghMark } from "../../../assets/github.svg";
import { LinkElement } from "../LinkElement";

interface LogInLinkProps {
  logIn: () => any;
}

export const LoginLink: React.FunctionComponent<LogInLinkProps> = ({
  logIn,
}) => (
  <LinkElement onClick={logIn}>
    <NamespacesConsumer>
      {t => (
        <>
          {t("navBar.login")}&nbsp;
          <img src={ghMark} height="24px" width="24px" />
        </>
      )}
    </NamespacesConsumer>
  </LinkElement>
);
