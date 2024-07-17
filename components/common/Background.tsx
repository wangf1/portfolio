"use client";
import BackgroundImage from "@/assets/images/Background.png";
import { Spotlight } from "@/components/ui/Spotlight";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Background = () => {
  const { theme } = useTheme();
  const [systemTheme, setSystemTheme] = useState("");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
      setIsThemeLoaded(true); // Set theme loaded to true once the system theme is determined
    };

    handleChange(); // Set the initial state
    mediaQuery.addEventListener("change", handleChange); // Add event listener for changes

    return () => mediaQuery.removeEventListener("change", handleChange); // Cleanup event listener on unmount
  }, [theme]);

  let currentTheme = theme;
  if (currentTheme !== "dark" && currentTheme !== "light") {
    currentTheme = systemTheme;
  }
  const spotlightColor = currentTheme === "dark" ? "white" : "#57d0f8";

  if (!isThemeLoaded) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden -z-50">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        className="absolute inset-0 m-auto rotate-[15deg] 
          opacity-30 blur-[1.5px]"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={spotlightColor}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center
        bg-background dark:bg-grid-white/[0.2] bg-grid-black/[0.2]
        dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center 
            justify-center dark:bg-black bg-white
            [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"
        />
      </div>
    </div>
  );
};

export default Background;
