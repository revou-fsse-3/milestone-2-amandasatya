// ArticleSearch.tsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchArticle } from "@/Hooks/useSearchArticle";
import { Button } from "@/components/ui/button";

const ArticleSearch: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setsearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery || searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }

      try {
        const results = await SearchArticle(searchQuery);
        setSearchResults(results || []);
        setCurrentPage(1);
      } catch (error) {
        console.error("Error searching articles:", error);
      }
    };

    performSearch();
  }, [searchQuery]);

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (id: string) => {
    navigate(`/articledetail/${encodeURIComponent(id)}`);
  };

  const renderResults = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return searchResults.slice(startIndex, endIndex).map((result) => {
      const id = result.url;

      return (
        <div
          key={id}
          className="mb-4 p-4 sm:w-full md:w-full lg:w-full xl:w-full"
        >
          <div className="bg-white h-full rounded-lg flex flex-col justify-between shadow-md transition duration-300 transform hover:scale-105">
            <img
              src={result.urlToImage}
              alt={result.urlToImage}
              className="object-cover h-44 w-full rounded-lg mb-4"
            />

            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-lg font-semibold mb-2">
                {truncateText(result.title, 5)}
              </h3>
              <div className="flex gap-2">
                <div className=" text-black rounded-sm px-2 py-1 text-sm">
                  {truncateText(result.description, 10)}
                </div>
              </div>
            </div>

            <Link
              to={`/articledetail/${encodeURIComponent(id)}`}
              state={result}
            >
              <Button
                onClick={() => handlePageChange(id)}
                className="bg-black text-white rounded-md py-2 mt-4 hover:bg-gray-800 w-full"
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      );
    });
  };

  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col justify-center items-center">
      <div className="relative mb-4">
        <input
          type="text"
          className="pl-10 pr-4 py-2 border rounded-md bg-white focus:outline-none focus:border-blue-300 w-full"
          placeholder="Search Your Article Here"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
        >
          <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {renderResults()}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-2 sm:space-y-0 sm:space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-gray-300 transition duration-300 mb-2 sm:mb-0`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;
