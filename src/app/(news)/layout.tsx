import { ChildrenProps } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsLayout({ children }: ChildrenProps) {
  return <>{children}</>;
}
