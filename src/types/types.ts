import React from "react";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type NavigationLink = {
  name: string;
  href: string;
};

export type NewsItem = {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string; // date UTC
  source: {
    name: string;
    url: string;
  };
};
