import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export interface Article {
  id: string;
  title: string;
  urlToImage: string;
  description: string;
  content: string;
  url: string;
  category: string;
  name: string;
}

export const useFetchArticle = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [subArticles, setSubArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { pathname } = useLocation();
  const [queryNavbar, setQueryNavbar] = useState<string>();

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://newsapi.org/v2/everything?language=en&q=sports&page=${page}&pageSize=12&apiKey=8d1f622b778e4d8d91422a5c6c856f4f`
        );

        setArticles((prevArticles) =>
          page === 1
            ? response.data.articles
            : [...prevArticles, ...response.data.articles]
        );

        setTotalPages(Math.ceil(response.data.totalResults / 8));
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [page]);

  useEffect(() => {
    const getSubArticle = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines/sources?category=${queryNavbar}&apiKey=8d1f622b778e4d8d91422a5c6c856f4f`
        );
        const dataArticle = response.data.sources;
        console.log("tessub", dataArticle);
        setSubArticles(dataArticle);
      } catch (error) {
        console.log(error);
      }
    };
    getSubArticle();
  }, [queryNavbar]);

  const truncate = (text: string, wordCount: number) => {
    const words = text.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return text;
  };

  const findArticleByUrl = (url: string): Article | undefined => {
    return articles.find((article) => article.url === decodeURIComponent(url));
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
      setPage(newPage);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    articles,
    totalPages,
    page,
    setPage: handlePageChange,
    truncate,
    findArticleByUrl,
    currentPath: pathname,
    loading,
    handleLoadMore,
    setQueryNavbar,
    queryNavbar,
    subArticles,
  };
};
