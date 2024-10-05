import type { Metadata } from "next";
import "@/styles/globals.css";
import { MetaDataContent } from "@/data/meta";
import { Poppins } from "next/font/google";

export const metadata: Metadata = MetaDataContent;

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  );
}
