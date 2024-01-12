// PageDetails.tsx
import React, { useEffect, useState } from "react";
import { useFetchArticle, Article } from "../../Hooks/useFetchArticle";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PageDetails: React.FC = () => {
  const { findArticleByUrl, truncate } = useFetchArticle();
  const { id } = useParams();
  const [detailedArticle, setDetailedArticle] = useState<Article | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        if (id) {
          const selectedArticle = findArticleByUrl(id);

          if (!selectedArticle) {
            console.log("Article not found!");
          } else {
            setDetailedArticle(selectedArticle);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticleDetail();
  }, [id, findArticleByUrl]);

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

export default PageDetails;
