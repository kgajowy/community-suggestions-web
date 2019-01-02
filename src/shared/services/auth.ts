import { LoginDto, User } from "../../auth/user";

export const logIn = async (loginData: LoginDto): Promise<User> => {
  await delay();
  return {
    id: "" + Math.floor(Math.random() * 1000),
    email: loginData.email,
    picture: {
      medium: "https://api.adorable.io/avatars/76/rand@adorable.io.png",
    },
    name: "Kamil",
    lastName: "Gajowy",
    profile: "No clue",
    suggestions: [],
    votes: [],
  };
};

export const delay = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
};
