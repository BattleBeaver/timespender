import type { Metadata } from "next";
import "@/style/global.css";
import { ChildrenProps } from "@/types/types";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Timespender",
  description: "Lets spend time together",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-col justify-between overflow-hidden gap-4">
        <div className="sticky">
          <Navigation />
        </div>
        <div className="flex overflow-y-auto overflow-x-hidden justify-center h-full">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
