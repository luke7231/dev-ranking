import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AmplitudeContextProvider from "./lib/core/amplitude/amplitude";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Ranking",
  description: "dev ranking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AmplitudeContextProvider>
        <body className={inter.className}>{children}</body>
      </AmplitudeContextProvider>
    </html>
  );
}
