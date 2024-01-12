import React from "react";
import { useFetchArticle } from "@/Hooks/useFetchArticle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setQueryNavbar } = useFetchArticle();

  const handleCategoryClick = (category: string) => {
    setQueryNavbar(category);
  };

  return (
    <>
      <div className="flex gap-2 justify-center items-center border-b-2 pb-2 border-gray-400">
        <div className="flex gap-2 mx-2">
          <h1 className="flex justify-center items-center text-2xl font-bold font-serif">
            NAFARIN
          </h1>
          <div>
            <h1 className="text-center text-2xl font-sans font-bold">
              The Magazine
            </h1>
            <h1 className="text-center text-red-600">
              Your Trusted Portal News
            </h1>
            <div className="flex gap-3 justify-center items-center">
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="hidden justify-center items-center gap-10 sm:flex lg:flex xl:flex ">
        <Link to={`/`} className="hover:text-red-500">
          Home
        </Link>
        <Link
          to={`/news/Business`}
          className="hover:text-red-500 "
          onClick={() => handleCategoryClick("business")}
        >
          Business
        </Link>
        <Link
          to={`/news/Entertainment`}
          className="hover:text-red-500"
          onClick={() => handleCategoryClick("entertainment")}
        >
          Entertainment
        </Link>
        <Link
          to={`/news/Health`}
          className="hover:text-red-500 "
          onClick={() => handleCategoryClick("health")}
        >
          Health
        </Link>
        <Link
          to={`/news/Science`}
          className="hover:text-red-500 "
          onClick={() => handleCategoryClick("science")}
        >
          Science
        </Link>
        <Link
          to={`/news/Sports`}
          className="hover:text-red-500"
          onClick={() => handleCategoryClick("sports")}
        >
          Sports
        </Link>
        <Link
          to={`/news/Technology`}
          className="hover:text-red-500"
          onClick={() => handleCategoryClick("technology")}
        >
          Technology
        </Link>
      </div>
    </>
  );
};

export default Navbar;
