"use client";
import { NewsItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ukrayina");
};

const externaImageLoader = ({ src }: { src: string }) => `${src}`;

const NewsCard = (data: NewsItem) => {
  return (
    <div className="card w-72 md:w-96 bg-base-100 shadow-xl border">
      <figure>
        <Image
          loader={externaImageLoader}
          alt={data.title}
          src={data.image}
          unoptimized={true}
          className="w-full max-h-52 object-cover"
          height={300}
          width={200}
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-between pt-2">
          <div>{formatDate(data.publishedAt)}</div>
          <div>
            <div className="badge badge-outline">Read</div>
            <div className="badge badge-outline">
              <Link href={data.url}>Source</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
