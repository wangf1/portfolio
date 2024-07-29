import { useEffect, useState } from "react";

type ThemeString = "light" | "dark";
/**
 * This method have 2 functionalities: <br/>
 *
 * 1. Returns an array containing the current local storage theme or system theme
 *    and a function to update the theme. <br/>
 *
 * 2. Registers a listener for the system theme changes,
 *    and update theme value of this hook accordingly.
 *
 *
 *
 * @return An array containing the current theme and a function to update the theme.
 */
const useAppTheme = (): ["light" | "dark", (e: ThemeString) => void] => {
  const themeInLocalStorage = localStorage.getItem("theme");
  //If no theme in local storage, or value is not light, then default to dark.
  const currentTheme = themeInLocalStorage === "light" ? "light" : "dark";
  const [theme, setTheme] = useState<ThemeString>(currentTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return [theme, setTheme];
};

export { useAppTheme };
