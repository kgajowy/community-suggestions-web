import { LoginDto, User } from "../../auth/user";

export const logIn = async (loginData: LoginDto): Promise<User> => {
  await delay();
  return {
    email: loginData.email,
    avatar: {
      url: "https://api.adorable.io/avatars/76/rand@adorable.io.png",
    },
    displayName: "Kamil Gajowy",
  };
};

const delay = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
};
