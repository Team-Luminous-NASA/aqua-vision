import type { Metadata } from "next";
import "@/styles/globals.css";
import { MetaDataContent } from "@/data/meta";

export const metadata: Metadata = MetaDataContent;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
