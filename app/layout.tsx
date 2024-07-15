import { ThemeProvider } from "@/app/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/common/Background";
import Navbar from "@/components/layout/Navbar";

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
