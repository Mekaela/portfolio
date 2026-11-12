import "./App.css";
import Home from "./containers/home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Blog from "./containers/blog/Blog";
import BlogPost from "./containers/blogPost/BlogPost";
import Faq from "./containers/faq/Faq";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </HashRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
