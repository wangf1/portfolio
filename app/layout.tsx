import StoreProvider from "@/app/StoreProvider";
import { ThemeProvider } from "@/app/theme-provider";
import Background from "@/components/common/Background";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "@/css/tailwind.css";
import { ClerkProvider } from "@clerk/nextjs";
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
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Background />
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
