import { Person } from "../../people/person";

export default interface Suggestion {
  id: string;
  title: string;
  description: string;
  voters: Person[];
  supporters: Person[];
  voted?: boolean;
  supported?: boolean;
}
