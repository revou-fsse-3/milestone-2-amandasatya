import React, { useEffect, useState } from "react";
import { useFetchArticle } from "@/Hooks/useFetchArticle";
import { useParams } from "react-router-dom";

interface Props {
  label: string;
}

const SubPage: React.FC<Props> = () => {
  const { loading, setQueryNavbar, subArticles } = useFetchArticle();
  const { category } = useParams<{ category?: string }>();
  const [currentLabel, setCurrentLabel] = useState<string | undefined>(
    category
  );

  useEffect(() => {
    if (category) {
      setQueryNavbar(category);
      setCurrentLabel(category);
    }
  }, [category, setQueryNavbar]);

  return (
    <>
      <div className="container mx-auto mt-8 p-4">
        <h1 className="flex justify-center items-center text-3xl font-semibold mb-4">
          {currentLabel}
        </h1>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : subArticles && subArticles.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subArticles.map((article) => (
              <li
                key={article.id}
                className="bg-white rounded-md overflow-hidden shadow-md p-4"
              >
                <h2 className="text-xl font-semibold mb-2">{article.name}</h2>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <p className="text-gray-600">Category: {article.category}</p>
                <p className="text-blue-500 hover:underline">
                  URL:{" "}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.url}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500">
            Sorry, no articles available in this category.
          </p>
        )}
      </div>
    </>
  );
};

export default SubPage;
