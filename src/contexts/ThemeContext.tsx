import Cookies from "js-cookie";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

interface ThemeContextProps {
  darkTheme: boolean;
  setTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  darkTheme: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
  const [darkTheme, setDarkTheme] = useState(rest.darkTheme ?? false);

  function setTheme() {
    setDarkTheme(darkTheme ? false : true);
  }

  useEffect(() => {
    Cookies.set("darkTheme", String(darkTheme));
    if (darkTheme) {
      document.body.style.background = "var(--background-dark)";
    } else {
      document.body.style.background = "var(--background)";
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
