import ArticleComponent from "@/components/ArticleComponent";
import { NewsItem, NewsResponse } from "@/types/types";
import fetchNews from "@/utils/getNews";
import { Suspense } from "react";

type ArticlePageProps = {
  params: {
    title: string;
  };
};

export async function generateStaticParams({ params }: ArticlePageProps) {
  const headLiners = (await fetchNews()) as NewsResponse;

  return headLiners.articles.map((art) => {
    return {
      title: encodeURIComponent(art.title),
    };
  });
}

const ArticlePage = async ({ params }: { params: { title: string } }) => {
  const selectedTitle = decodeURIComponent(params.title);
  const headLiners = (await fetchNews()) as NewsResponse;
  const article = headLiners.articles.find(
    (art) => art.title === selectedTitle
  );

  return (
    <Suspense
      fallback={<span className="loading loading-spinner text-primary"></span>}
    >
      <ArticleComponent article={article} />
    </Suspense>
  );
};

export default ArticlePage;
