import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ArticleSearch,
  ArticleDetails,
  Navbar,
  HomePage,
  SubPage,
  Footer,
  PageDetails,
  NewsPage,
} from "./pages/index";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <ArticleSearch />
              <NewsPage />
              <Footer />
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
