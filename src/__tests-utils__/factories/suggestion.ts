import { SuggestionState } from "../../reducers/suggestions";
import Suggestion from "../../shared/interfaces/suggestion";
import { emptyPerson } from "./user";

export const emptySuggestion = (): Suggestion => ({
  id: Math.random().toString(),
  title: "Suggestion",
  description: "Suggestion Description",
  author: emptyPerson(),
  voters: [],
  supporters: [],
});

export const suggestionState = (
  suggestion: Suggestion = emptySuggestion()
): SuggestionState => ({
  id: suggestion.id,
  suggestion,
  changePending: false,
});
