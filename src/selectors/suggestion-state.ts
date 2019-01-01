import { createSelector } from "reselect";
import { SuggestionsState, SuggestionState } from "../reducers/suggestions";

const getSuggestionStateFilter = (
  state: SuggestionsState,
  props: { id: string }
): SuggestionState | null => {
  const results = state.suggestionStates.filter(s => s.id === props.id);
  if (results.length === 1) {
    return results[0];
  }
  return null;
};

export const getSuggestionState = createSelector(
  [getSuggestionStateFilter],
  suggestion => suggestion
);
