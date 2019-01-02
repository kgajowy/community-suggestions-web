import axios from "axios";
import { uniqueId } from "lodash";
import { User } from "../../auth/user";
import { Person } from "../../people/person";
import Suggestion, { NewSuggestion } from "../interfaces/suggestion";
import { delay } from "./auth";

export const getSuggestions = async (): Promise<Suggestion[]> => {
  const supporters = (await axios.get("https://randomuser.me/api/?results=3"))
    .data.results;
  const voters = (await axios.get("https://randomuser.me/api/?results=10")).data
    .results;
  const author = (await axios.get("https://randomuser.me/api/?results=1")).data
    .results[0];

  return new Array<Suggestion>(10).fill({} as any).map(() => ({
    id: uniqueId("suggestion"),
    title: "React dla początkujących",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    voters,
    supporters,
    author: {
      id: author.login.uuid,
      email: author.email,
      name: author.name.first,
      lastName: author.name.last,
      profile: "duno",
      picture: {
        medium: author.picture.medium,
      },
    },
  }));
};

export const submitSuggestion = (s: NewSuggestion): Promise<Suggestion> => {
  return new Promise<Suggestion>(resolve => {
    setTimeout(() => {
      const p: Person = {
        id: s.authorId,
        email: "a@a.pl",
        name: "b",
        lastName: "c",
        profile: "d",
        picture: {
          medium: "",
        },
      };
      resolve({
        id: "" + Math.floor(Math.random() * 1000),
        title: s.title,
        description: s.description,
        author: p,
        voters: [],
        supporters: [],
        voted: false,
        supported: false,
      } as Suggestion);
    }, 1500);
  });
};

export const support = (s: Suggestion, u: User): Promise<Suggestion> => {
  return new Promise(async resolve => {
    await delay();
    const refreshedUser: User = {
      ...u,
      suggestions: [...u.suggestions, s],
    };
    const fetchedSuggestion: Suggestion = {
      ...s,
      supporters: [...s.supporters, refreshedUser],
    };
    resolve(fetchedSuggestion);
  });
};
