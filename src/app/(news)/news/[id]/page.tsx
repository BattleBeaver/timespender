import ArticleComponent from "@/components/ArticleComponent";
import { NewsResponse } from "@/types/types";
import fetchNews from "@/utils/getNews";

export async function generateStaticParams() {
  const headLiners = (await fetchNews()) as NewsResponse;

  return headLiners.articles.map((art) => {
    return {
      id: art.id,
    };
  });
}

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const selectedId = params.id;
  const headLiners = (await fetchNews()) as NewsResponse;
  const article = headLiners.articles.find((art) => art.id === selectedId);

  return <ArticleComponent article={article} />;
};

export default ArticlePage;
