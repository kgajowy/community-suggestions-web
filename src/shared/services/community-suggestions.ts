import axios from "axios";
import { uniqueId } from "lodash";
import Suggestion from "../interfaces/suggestion";

export const getSuggestions = async (): Promise<Suggestion[]> => {
  const supporters = (await axios.get("https://randomuser.me/api/?results=3"))
    .data.results;
  const voters = (await axios.get("https://randomuser.me/api/?results=10")).data
    .results;

  return new Array<Suggestion>(10).fill({
    id: uniqueId("suggestion"),
    title: "React dla początkujących",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    voters,
    supporters
  });
};

export const submitSuggestion = async (s: Suggestion): Promise<Suggestion> => {
  return new Promise<Suggestion>(resolve => {
    setTimeout(() => {
      resolve(s);
    }, 1500);
  });
};
