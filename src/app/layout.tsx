import type { Metadata } from "next";
import "@/style/global.css";
import { ChildrenProps } from "@/types/ChildrenProps";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Timespender",
  description: "Lets spend time together",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Navigation />
        <div className="overflow-y-hidden mx-2 border min-h-16 flex flex-col justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
