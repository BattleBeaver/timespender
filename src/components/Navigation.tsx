import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar bg-base-100">
      <Link className="btn btn-ghost normal-case text-xl" href="/">
        Home
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" href="/news">
        News
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" href="/about">
        About
      </Link>
    </nav>
  );
};

export default Navigation;
