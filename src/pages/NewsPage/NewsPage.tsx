import React from "react";
import { Button } from "@/components/ui/button";
import { useFetchArticle } from "../../Hooks/useFetchArticle";
import { useNavigate } from "react-router-dom";

const NewsPage: React.FC = () => {
  const { articles, totalPages, page, truncate } = useFetchArticle();
  const navigate = useNavigate();

  const handleDetailedArticle = (url: string) => {
    navigate(`/article/${encodeURIComponent(url)}`);
  };

  return (
    <div className="container mx-auto mt-5 min-h-screen">
      <h1 className="flex justify-center items-center text-center text-2xl font-serif font-bold p-5">
        News from around the world
      </h1>
      <div className="flex justify-center items-center">
        <div className="min-h-screen w-10/12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full gap-10">
            {articles.map((article) => (
              <div
                key={article.url}
                className=" bg-blue-50 shadow-md rounded-2xl h-full flex flex-col grayscale hover:grayscale-0 transition duration-300"
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-52 object-cover rounded-t-2xl "
                />
                <div className="p-4 flex-grow">
                  <h2 className="text-2xl font-semibold mb-2 text-black">
                    {truncate(article.title, 4)}
                  </h2>
                  <p className="text-md font-semibold mb-2 text-black">
                    {truncate(article.description, 7)}
                  </p>
                </div>
                <Button
                  className="w-full hover:bg-red-400"
                  onClick={() => handleDetailedArticle(article.url)}
                >
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {!loading && (
        <div className="flex justify-center mt-4">
          <Button
            className="mx-2"
            onClick={handleLoadMore}
            disabled={articles.length === 0}
          >
            Load More
          </Button>
        </div>
      )} */}

      <div className="flex justify-center items-center text-white">{`Page ${page} of ${totalPages}`}</div>
    </div>
  );
};

export default NewsPage;
