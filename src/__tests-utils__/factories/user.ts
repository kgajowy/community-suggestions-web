import { User } from "../../auth/user";
import { Person } from "../../people/person";

export const emptyPerson = (): Person => ({
  id: Math.random().toString(),
  email: "john@doe.com",
  name: "John",
  lastName: "Doe",
  profile: "none",
  picture: {
    medium: "https://api.adorable.io/avatars/139/test@me.com.png",
  },
});

export const emptyUser = (user: Partial<User> = {}): User => ({
  votes: [],
  suggestions: [],
  ...emptyPerson(),
  ...user,
});
