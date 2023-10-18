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
      <body className="h-screen flex flex-col justify-between overflow-hidden gap-4">
        <div className="sticky">
          <Navigation />
        </div>
        <div className="flex overflow-y-auto overflow-x-hidden items-center justify-center">
          {children}
        </div>
        <div className="sticky">
          <Footer />
        </div>
      </body>
    </html>
  );
}

//  className = "flex items-center justify-center overflow-auto mb-auto";
