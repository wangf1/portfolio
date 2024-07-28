"use client";
import { useAppTheme } from "@/frontend/common/theme/appThemeHook";
import { darkTheme, lightTheme } from "@/frontend/common/theme/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext, useEffect, useMemo, useState } from "react";

// Create the context with default values
const initialContext = {
  theme: "",
  setTheme: (theme: string) => {},
};
const AppThemeContext = createContext(initialContext);

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [theme, setTheme] = useAppTheme();

  const [muiTheme, setMuiTheme] = useState(
    theme === "dark" ? darkTheme : lightTheme
  );

  /*
  Using an effect is acceptable, and directly using the hook value 
  in the component property is also fine, like this:

  <MuiThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>.

  useAppTheme hook return theme that has reactivity.
*/
  useEffect(() => {
    setMuiTheme(theme === "dark" ? darkTheme : lightTheme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme, theme]);
  return (
    <NextThemesProvider attribute="class" enableSystem defaultTheme={theme}>
      <AppThemeContext.Provider value={value}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </AppThemeContext.Provider>
    </NextThemesProvider>
  );
};

export { AppThemeContext, AppThemeProvider };
