import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserStore } from "./user-store.types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
    }
  )
);
