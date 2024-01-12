import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 grayscale hover:grayscale-0 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8">
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h1 className="text-3xl font-bold font-serif">NAFARIN</h1>
          <p className="text-lg">The Magazine</p>
          <p className="text-red-600">Your Trusted Portal News</p>
        </div>
        <div className="w-full lg:w-1/3 text-center mt-4 lg:mt-0">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center items-center lg:justify-center gap-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center mt-4 lg:mt-0">
          <h2 className="text-xl font-semibold mb-2">News Categories :</h2>
          <div className="flex flex-wrap justify-center lg:justify-center gap-4">
            <Link
              to="/news/Business"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Business
            </Link>
            <Link
              to="/news/Entertainment"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Entertainment
            </Link>
            <Link
              to="/news/Health"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Health
            </Link>
            <Link
              to="/news/Science"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Science
            </Link>
            <Link
              to="/news/Sports"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Sports
            </Link>
            <Link
              to="/news/Technology"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Technology
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
