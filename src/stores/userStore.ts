import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
};

export type UserStore = {
  user?: User;
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
