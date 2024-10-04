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
      <div className="w-full z-50 fixed bg-sky-500 bg-opacity-10 backdrop-blur-sm">
        <NavBar />
      </div>
      <div className="2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto my-5 w-full">
        {children}
      </div>
      <div className="w-full mx-auto bg-sky-500 bg-opacity-10 backdrop-blur-sm">
        <SiteFooter />
      </div>
    </div>
  );
}
