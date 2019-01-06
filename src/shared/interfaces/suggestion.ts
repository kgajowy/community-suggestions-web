import { Person } from "../../people/person";

export default interface Suggestion {
  id: string;
  title: string;
  description: string;
  author: Person;
  voters: Person[];
  supporters: Person[];
  voted?: boolean;
  supported?: boolean;
}

export interface NewSuggestion extends NewSuggestionInput {
  authorId: string;
}

export interface NewSuggestionInput {
  title: string;
  description: string;
}
