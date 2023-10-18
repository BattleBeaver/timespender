import { NewsItem } from "@/types/types";
import Link from "next/link";
import React from "react";

const NewsCard = (data: NewsItem) => {
  return (
    <div className="card w-72 md:w-96 bg-base-100 shadow-xl border">
      <figure>
        <img src={data.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Read full</div>
          <div className="badge badge-outline">View source</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
