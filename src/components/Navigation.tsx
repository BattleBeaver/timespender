"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/navLinks";

const defaultStyles = "btn btn-ghost normal-case text-xl";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar bg-base-200 border-b">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === link.href
            : pathname.startsWith(link.href);
        return (
          <Link
            className={(isActive ? "btn-active " : "") + defaultStyles}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
