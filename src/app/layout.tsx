import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./path-to-font-file.ttf",
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: "Apple UI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geistMono.variable}
      >
        {children}
      </body>
    </html>
  );
}
