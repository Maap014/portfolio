"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeProps {
  theme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string | undefined>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a useThemeProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedTheme = sessionStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      setTheme(prefersDarkMode ? "light" : "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  };

  useEffect(() => {
    if (theme) {
      const existingClasses = document.documentElement.className.split(" ");
      const filteredClasses = existingClasses.filter(
        (cls) => cls !== "light" && cls !== "dark"
      );
      document.documentElement.className = [...filteredClasses, theme].join(
        " "
      );

      sessionStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
