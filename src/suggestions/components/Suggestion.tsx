import * as React from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import Support from "../../activity-buttons/support/Support";
import { Avatar } from "../../people/Avatar";
import { Button } from "../../shared/components/Button";
import { default as SuggestionInterface } from "../../shared/interfaces/suggestion";
import { inputStyles } from "../../submit-form/components/input-styles";
import { styled } from "../../theme/styled";

const Container = styled.div`
  ${inputStyles};
  padding: 30px;
  background: #fff;
  border-radius: 7px;

  margin-bottom: 25px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  transition: all 300ms ease-in;
`;

const CondensedAvatar = styled(Avatar)`
  margin-right: -20px;
`;

const H3 = styled.h3`
  color: black;
`;
const H4 = styled.h4`
  color: black;
`;

export const Suggestion: React.FunctionComponent<
  SuggestionInterface & WithNamespaces
> = ({ t, ...suggestion }) => (
  <Container>
    <H3>{suggestion.title}</H3>
    <p>{suggestion.description}</p>
    <H4>{t("suggestions.supporters")}</H4>
    {suggestion.supporters.map((s, i) => (
      <Avatar url={s.picture.medium} key={i} />
    ))}
    <br />
    <Support suggestion={suggestion} />
    <H4>{t("suggestions.voters")}</H4>
    {suggestion.voters.map((s, i) => (
      <CondensedAvatar url={s.picture.medium} key={i} />
    ))}
    <br />
    <Button>Zagłosuj</Button>
  </Container>
);

export default withNamespaces()(Suggestion);
