export interface User {
  email: string;
  avatar: {
    url: string;
  };
  displayName: string;
}

export interface LoginDto {
  email: string;
  password: string;
}
