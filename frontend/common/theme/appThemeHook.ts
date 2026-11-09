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
  // Start with dark on both server and client; localStorage only exists in the
  // browser, so the saved theme is read after mount (avoids SSR crash and
  // hydration mismatch).
  const [theme, setTheme] = useState<ThemeString>("dark");

  useEffect(() => {
    //If no theme in local storage, or value is not light, keep dark.
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    }

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
