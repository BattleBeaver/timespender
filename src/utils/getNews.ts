const KEY = "6804c7f8bc6a98995e59b692337fe187";
const DEFAULT_CATEGORY = "general";
const GNEWS_URL = "https://gnews.io/api/v4/";
const DEFAULT_TYPE = "top-headlines";
const DEFAULT_LANG = "uk";
const DEFAULT_COUNTRY = "ua";

const fetchNews = async (
  reqType = DEFAULT_TYPE,
  category = DEFAULT_CATEGORY,
  country = DEFAULT_COUNTRY,
  language = DEFAULT_LANG
) => {
  const path = `${GNEWS_URL}${reqType}?category=${category}&lang=${language}&country=${country}&max=10&apikey=${KEY}`;

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
  return news;
};

export default fetchNews;
