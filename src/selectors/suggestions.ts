import { createSelector } from "reselect";
import { SuggestionsState } from "../reducers/suggestions";

const getSuggestionsOnly = (state: SuggestionsState) => {
  console.log(`SELEKTOR ... inside fn`, state);
  return state.suggestions.map(s => s.suggestion);
};

export const selectSuggestions = createSelector(
  [getSuggestionsOnly],
  suggestions => {
    console.log(`SELECTOR....`, suggestions);
    return suggestions;
  }
);
