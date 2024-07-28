// app/components/ThemeSwitcher.tsx
"use client";

import { AppThemeContext } from "@/frontend/common/theme/AppThemeProvider";
import { Button } from "@/frontend/ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useContext, useEffect } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useContext(AppThemeContext);

  /*
  Use an effect to update the next theme whenever the app theme changes.
  This logic is placed here instead of in AppThemeProvider because 
  the next-themes useTheme hook is not be ready for use there, 
  causing next theme to not update.

  The reason of not putting it in onClick is, keep it here can make next-themes 
  update according to system theme change. See also appThemeHook -> useAppTheme
  for how to listen system theme change.
 */
  const { setTheme: setNextTheme } = useTheme();
  useEffect(() => {
    setNextTheme(theme);
  }, [theme]);

  const icon =
    theme === "dark" ? <Sun /> : <MoonStar className="text-gray-600" />;

  const onClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div>
      <Button onClick={onClick} variant="ghost">
        {icon}
      </Button>
    </div>
  );
}
