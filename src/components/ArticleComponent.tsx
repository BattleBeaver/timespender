import { NewsItem } from "@/types/types";
import { formatDate } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

type ArticleComponentProps = {
  article: NewsItem | undefined;
};

const ArticleComponent = ({ article }: ArticleComponentProps) => {
  if (article !== undefined) {
    return (
      <div className="flex pt-10 px-10 pb-5 mx-5 mt-12 flex-col items-center justify-center bg-slate-800 gap-5 w-80 h-max md:w-2/4 border rounded-lg">
        <h1 className="text-3xl">{article.title}</h1>
        <hr />
        <Image
          src={article.image}
          alt={article.title}
          width={100}
          unoptimized={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          className="w-10/12 max-h-72 object-cover"
          height={100}
        ></Image>
        <p>{article.content}</p>
        <div className="w-full flex justify-between text-lg">
          <div>{formatDate(article.publishedAt)}</div>
          <div>
            Source:{" "}
            <Link className="underline" href={article.url}>
              {article.source.name}
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="text-4xl">
        Oops. Something went wrong. Please try again later
      </h1>
    );
  }
};

export default ArticleComponent;
