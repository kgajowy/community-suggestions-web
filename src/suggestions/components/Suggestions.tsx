import * as React from "react";
import Suggestion from "../../shared/interfaces/suggestion";
import { styled } from "../../theme/styled";
import { StyledProps } from "../../theme/styled-props";
import SuggestionView from "./Suggestion";

interface SuggestionsProps {
  suggestions: Suggestion[];
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Suggestions: React.FunctionComponent<
  SuggestionsProps & StyledProps
> = ({ suggestions = [] }) => (
  <Container>
    {suggestions.map(s => (
      <SuggestionView suggestion={s} key={s.id} />
    ))}
  </Container>
);
