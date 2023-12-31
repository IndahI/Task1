import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import EditBook from "./pages/EditBook";
import SignUp from "./pages/SignUp";
import BookBrief from "./pages/BookBrief";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Index1 from "./pages/Index1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/book-brief":
        title = "";
        metaDescription = "";
        break;
      case "/add-book":
        title = "";
        metaDescription = "";
        break;
      case "/edit-book":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/index":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {/* Default route, navigate to /index */}
      <Route path="" element={<Index1 />} />

      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/book-brief" element={<BookBrief />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/edit-book" element={<EditBook />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/index" element={<Index1 />} />
    </Routes>
  );
}

export default App;
