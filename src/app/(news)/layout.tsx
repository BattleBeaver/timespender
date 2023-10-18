import { ChildrenProps } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsLayout({ children }: ChildrenProps) {
  return (
    <div className="flex w-full h-full justify-center items-center p-3">
      {children}
    </div>
  );
}
