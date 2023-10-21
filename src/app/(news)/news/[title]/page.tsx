import ArticleComponent from "@/components/ArticleComponent";
import { NewsResponse } from "@/types/types";
import fetchNews from "@/utils/getNews";
import { Suspense } from "react";

type ArticlePageProps = {
  params: {
    title: string;
  };
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const articleTitle = decodeURIComponent(params.title);
  const headLiners = (await fetchNews()) as NewsResponse;

  const article = headLiners.articles.find((art) => art.title === articleTitle);
  return (
    <Suspense
      fallback={<span className="loading loading-spinner text-primary"></span>}
    >
      <ArticleComponent article={article} />
    </Suspense>
  );
};

export default ArticlePage;
