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
  const [theme, setTheme] = useState<ThemeString>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    const themeInLocalStorage = localStorage.getItem("theme");
    let currentTheme: ThemeString;
    if (themeInLocalStorage === "dark" || themeInLocalStorage === "light") {
      currentTheme = themeInLocalStorage;
    } else {
      currentTheme = mediaQuery.matches ? "dark" : "light";
    }

    setTheme(currentTheme);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return [theme, setTheme];
};

export { useAppTheme };
