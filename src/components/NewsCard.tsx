import { NewsItem } from "@/types/types";
import { formatDate } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const badgeStyle =
  "badge badge-outline p-3 transition duration-300 hover:bg-orange-600 hover:text-black";

const NewsCard = (data: NewsItem) => {
  return (
    <div className="card w-72 md:w-96 bg-base-100 shadow-xl border">
      <figure>
        <Image
          alt={data.title}
          src={data.image}
          unoptimized={true}
          className="w-full h-52 object-cover"
          height={300}
          width={200}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-between pt-2">
          <div>{formatDate(data.publishedAt)}</div>
          <div className="flex gap-2">
            <div className={badgeStyle}>
              <Link href={`/news/${data.id}`}>Read</Link>
            </div>
            <div className={badgeStyle}>
              <Link href={data.url}>Source</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
