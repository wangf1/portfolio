// app/components/ThemeSwitcher.tsx
"use client";

import { MUIThemeContext } from "@/frontend/common/mui_theme/MUIThemeProvider";
import { darkTheme, lightTheme } from "@/frontend/common/mui_theme/theme";
import { Button } from "@/frontend/ui/button";
import { Theme } from "@mui/material/styles";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const { setTheme: setMuiTheme } = useContext(MUIThemeContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const icon =
    theme === "dark" ? <Sun /> : <MoonStar className="text-gray-600" />;

  const onClick = () => {
    let nextJSTheme: "dark" | "light";
    let muiTheme: Theme;
    if (theme === "dark") {
      nextJSTheme = "light";
      muiTheme = lightTheme;
    } else {
      nextJSTheme = "dark";
      muiTheme = darkTheme;
    }
    setTheme(nextJSTheme);
    setMuiTheme(muiTheme);
  };

  return (
    <div>
      <Button onClick={onClick} variant="ghost">
        {icon}
      </Button>
    </div>
  );
}
