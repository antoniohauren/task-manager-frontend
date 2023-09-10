type User = {
  id: string;
  email: string;
  name: string;
};

export type UserStore = {
  user?: User;
  setUser: (user: User) => void;
};
