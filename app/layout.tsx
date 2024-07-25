import StoreProvider from "@/app/StoreProvider";
import { ThemeProvider as NextThemesProvider } from "@/app/theme-provider";
import Background from "@/components/common/Background";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "@/css/tailwind.css";
import { MUIThemeProvider } from "@/src/mui_theme/MUIThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark F.W.'s Portfolio",
  description:
    "This is my portfolio as a practice and showcase modern frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <NextThemesProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <AppRouterCacheProvider>
                <MUIThemeProvider>
                  <Background />
                  <Navbar />
                  {children}
                  <Toaster />
                </MUIThemeProvider>
              </AppRouterCacheProvider>
            </NextThemesProvider>
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
