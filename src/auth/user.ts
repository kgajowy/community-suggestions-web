import { Person } from "../people/person";
import Suggestion from "../shared/interfaces/suggestion";

export interface User extends Person {
  suggestions: Suggestion[];
  votes: Suggestion[];
}

export interface LoginDto {
  email: string;
  password: string;
}
