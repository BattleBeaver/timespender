import { ChildrenProps } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function RootLayout({ children }: ChildrenProps) {
  return <div>{children}</div>;
}
