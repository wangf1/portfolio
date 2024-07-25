"use client";
import { darkTheme, lightTheme } from "@/src/mui_theme/theme";
import { Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "next-themes";
import { createContext, useMemo, useState } from "react";

// Create the context with default values
const initialContext = {
  theme: darkTheme,
  setTheme: (theme: Theme) => {},
};
const MUIThemeContext = createContext(initialContext);

const MUIThemeProvider = ({ children }) => {
  const { theme: nextJSTheme } = useTheme();

  const currentTheme = nextJSTheme === "dark" ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(currentTheme);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <MUIThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MUIThemeContext.Provider>
  );
};

export { MUIThemeContext, MUIThemeProvider };
