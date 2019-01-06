import Suggestion from "../../shared/interfaces/suggestion";

export const emptySuggestion = (): Suggestion => ({
  id: Math.random().toString(),
  title: "Suggestion",
  description: "Suggestion Description",
  author: {
    id: Math.random().toString(),
    email: "john@doe.com",
    name: "John",
    lastName: "Doe",
    profile: "none",
    picture: {
      medium: "https://api.adorable.io/avatars/139/test@me.com.png",
    },
  },
  voters: [],
  supporters: [],
});
