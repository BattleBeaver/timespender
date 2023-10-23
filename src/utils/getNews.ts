import { NewsItem } from "@/types/types";

const DEFAULT_CATEGORY = "general";
const DEFAULT_TYPE = "top-headlines";
const DEFAULT_LANG = "uk";
const DEFAULT_COUNTRY = "ua";

const fetchNews = async (
  reqType = DEFAULT_TYPE,
  category = DEFAULT_CATEGORY,
  country = DEFAULT_COUNTRY,
  language = DEFAULT_LANG
) => {
  const path = `${process.env.GNEWS_URL}${reqType}?category=${category}&lang=${language}&country=${country}&max=10&apikey=${process.env.KEY}`;

  const news = await fetch(path, {
    next: {
      revalidate: 60 * 60 * 24, // revalidate once per day
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  news.articles.map((art: NewsItem, index: number) => {
    art.id = index.toString();
    return art;
  });
  return news;
};

export default fetchNews;
