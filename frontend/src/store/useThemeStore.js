import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("YappIt-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("YappIt-theme", theme);
    set({ theme });
  },
}));
