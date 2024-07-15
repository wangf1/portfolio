// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const icon =
    theme === "dark" ? <Sun /> : <MoonStar className="text-gray-600" />;

  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Button onClick={onClick} variant="ghost">
        {icon}
      </Button>
    </div>
  );
}
