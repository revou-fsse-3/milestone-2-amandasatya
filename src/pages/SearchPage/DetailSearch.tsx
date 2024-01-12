import { useEffect, useState } from "react";
import { useFetchArticle } from "@/Hooks/useFetchArticle";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ArticleSearch = () => {
  const { id } = useParams();
  const { articles, truncate } = useFetchArticle();
  const [detailedArticle, setDetailedArticle] = useState<any>(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setDetailedArticle(state);
    } else {
      const fetchArticleDetail = async () => {
        try {
          const selectedArticle = articles[Number(id)];
          setDetailedArticle(selectedArticle);
        } catch (error) {
          console.error(error);
        }
      };

      fetchArticleDetail();
    }
  }, [id, articles, state]);

  if (!detailedArticle) {
    return <div>Loading...</div>;
  }

  const { title, urlToImage, content, url } = detailedArticle;

  return (
    <div className="max-w-screen-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <p className="text-base leading-6 mb-4">{truncate(content, 30)}</p>
      <Button className="bg-blue-500 text-white hover:bg-blue-700 p-3 rounded-md">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </Button>
    </div>
  );
};

export default ArticleSearch;
