"use client";
import { Theme, createTheme } from "@mui/material/styles";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    text: {
      secondary: "#4b5563", // text-gray-600
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});
