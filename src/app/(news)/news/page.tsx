import NewsCard from "@/components/NewsCard";
import { NewsResponse } from "@/types/types";
import fetchNews from "@/utils/getNews";
import React from "react";

const NewsPage = async () => {
  const headLiners = (await fetchNews()) as NewsResponse;
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full">
      {headLiners.articles.map((article, ardicleIdx) => {
        return <NewsCard key={ardicleIdx} {...article} />;
      })}
    </div>
  );
};

export default NewsPage;
