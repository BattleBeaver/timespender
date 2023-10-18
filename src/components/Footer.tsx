import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full grid-flow-row items-start gap-1 md:gap-3 footer-center p-1.5 bg-base-200 text-base-content rounded h-25">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">
          About me
        </Link>
        <Link href="/contacts" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <div className=" grid-flow-col gap-4 hidden md:grid">
          <Link href="https://www.linkedin.com/in/dmytro-shchepinskyi-349a38214/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/dimon_rider/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              className="fill-current"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </Link>
        </div>
      </nav>
      <aside className="hidden md:flex">
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
