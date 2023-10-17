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
      <body className="h-screen flex flex-col justify-between">
        <Navigation />
        <div className="flex items-center justify-center overflow-auto mb-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
