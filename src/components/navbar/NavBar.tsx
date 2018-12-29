import React, { FunctionComponent } from "react";
import { styled } from "../../theme/styled";
import LogInLink from "./AuthLink";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${p => p.theme.primaryColor};
  justify-content: flex-end;
  display: flex;
`;

export const NavBar: FunctionComponent = () => (
  <List>
    <LogInLink />
  </List>
);
