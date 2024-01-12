// App.tsx

import NewsPage from "./pages/NewsPage/NewsPage";
import PageDetails from "./pages/PageDetails/PageDetails";
import ArticleSearch from "./pages/SearchPage/SearchPage";
import ArticleDetails from "./pages/SearchPage/DetailSearch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import SubPage from "./pages/SubPage/SubPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<ArticleSearch />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <ArticleSearch />
              <NewsPage />
            </>
          }
        />
        <Route
          path="/articledetail/:id"
          element={
            <>
              <Navbar />
              <ArticleDetails />
            </>
          }
        />
        <Route
          path="/article/:id"
          element={
            <>
              <Navbar />
              <PageDetails />
            </>
          }
        />
        <Route
          path="/news/:category"
          element={
            <>
              <Navbar />
              <SubPage label={"tes"} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
