"use client";
import { darkTheme } from "@/frontend/common/mui_theme/theme";
import { Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

// Create the context with default values
const initialContext = {
  theme: darkTheme,
  setTheme: (theme: Theme) => {},
};
const MUIThemeContext = createContext(initialContext);

interface MUIThemeProviderProps {
  children: React.ReactNode;
  defaultTheme: Theme;
}

const MUIThemeProvider = ({
  children,
  defaultTheme,
}: MUIThemeProviderProps) => {
  const [theme, setTheme] = useState(darkTheme);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <MUIThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MUIThemeContext.Provider>
  );
};

export { MUIThemeContext, MUIThemeProvider };
