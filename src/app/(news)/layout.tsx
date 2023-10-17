import { ChildrenProps } from "@/types/ChildrenProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function RootLayout({ children }: ChildrenProps) {
  return <div className="bg-blue-900 h-screen">{children}</div>;
}
