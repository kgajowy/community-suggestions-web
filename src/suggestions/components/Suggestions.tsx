import * as React from "react";
import { TransitionGroup } from "react-transition-group";
// @ts-ignore
import transition from "styled-transition-group";
import Suggestion from "../../shared/interfaces/suggestion";
import { styled } from "../../theme/styled";
import { StyledProps } from "../../theme/styled-props";
import { Suggestion as SuggestionView } from "./Suggestion";

interface SuggestionsProps {
  suggestions: Suggestion[];
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const AnimatedItem = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`

  &:enter {
    max-height: 0;
    transition: max-height 0.5s ease-out;
    overflow: hidden;
  }
  &:enter-active {
    max-height: 500px;
    transition: max-height 0.5s ease-out;
  } 
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`;

export const Suggestions: React.FunctionComponent<
  SuggestionsProps & StyledProps
> = ({ suggestions = [] }) => (
  <Container>
    <TransitionGroup>
      {suggestions.map(s => (
        <AnimatedItem key={s.id} timeout={500}>
          <SuggestionView {...s} />
        </AnimatedItem>
      ))}
    </TransitionGroup>
  </Container>
);
