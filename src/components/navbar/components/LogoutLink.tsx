import * as React from "react";
import { NamespacesConsumer } from "react-i18next";
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
    <NamespacesConsumer>
      {t => (
        <>
          {t("navBar.logout")} &nbsp;
          <img
            src={user.picture.medium}
            height="24px"
            width="24px"
            alt={user.name}
          />
        </>
      )}
    </NamespacesConsumer>
  </LinkElement>
);
