import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "./states/authState";

const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      name: "",
      role: "",
      isLoggedIn: false,

      setName: (newName: string) => {
        set({ name: newName });
      },
      setRole: (role: string) => {
        set({ role });
      },
      setIsLoggedIn: (value: boolean) => {
        set({ isLoggedIn: value });
      },
    }),
    {
      name: "auth-state",
    },
  ),
);

export default useAuth;
