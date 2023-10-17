import { NewsItem } from "@/types/types";
import Link from "next/link";
import React from "react";

const NewsCard = (data: NewsItem) => {
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={data.image} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.title}</div>
          <p className="text-gray-700 text-base">{data.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <Link href={data.url}>Read full</Link>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Read in source
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
