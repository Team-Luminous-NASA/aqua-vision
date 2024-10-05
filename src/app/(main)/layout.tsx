import type { Metadata } from "next";
import "@/styles/globals.css";
import { MetaDataContent } from "@/data/meta";
import { NavBar } from "@/components/common/navbar/NavBar";
import { SiteFooter } from "@/components/common/footer/Footer";

export const metadata: Metadata = MetaDataContent;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full z-50 fixed bg-sky-900 bg-opacity-20 backdrop-blur-sm shadow-2xl">
        <NavBar />
      </div>
      <div className="container mx-auto my-28 w-full">{children}</div>
      <div className="w-full mx-auto bg-sky-900 bg-opacity-20 backdrop-blur-sm">
        <SiteFooter />
      </div>
    </div>
  );
}
