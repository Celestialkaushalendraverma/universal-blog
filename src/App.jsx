import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogPage from "./BlogPage";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: "2rem" }}>
        <h1>🧠 Universal Thought</h1>
        <nav>
          <Link to="/post/2025-04-22-pehla-vichar">पहला विचार</Link> |{" "}
          <Link to="/post/dusra-vichar">दूसरा विचार</Link>
        </nav>
        <Routes>
          <Route path="/post/:slug" element={<PostWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const PostWrapper = () => {
  const slug = window.location.pathname.split("/").pop();
  return <BlogPage postName={slug} />;
};

export default App;
