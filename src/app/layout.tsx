import type { Metadata } from "next";
import "@/styles/globals.css";
import { MetaDataContent } from "@/data/meta";
import { Poppins } from "next/font/google";

export const metadata: Metadata = MetaDataContent;

export const fonts = [Poppins];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gradient-to-b from-blue-900 to-blue-500 text-white"
        style={{ fontFamily: "Poppins" }}
      >
        {children}
      </body>
    </html>
  );
}
