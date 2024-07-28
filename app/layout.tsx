import StoreProvider from "@/app/StoreProvider";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import Background from "@/frontend/common/Background";
import Navbar from "@/frontend/common/layout/Navbar";
import { AppThemeProvider } from "@/frontend/common/theme/AppThemeProvider";
import { Toaster } from "@/frontend/ui/toaster";
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
            <AppRouterCacheProvider>
              <AppThemeProvider>
                <Background />
                <Navbar />
                {children}
                <Toaster />
              </AppThemeProvider>
            </AppRouterCacheProvider>
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
