import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const BlogPage = ({ postName }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`./posts/${postName}.md`)
      .then(res => fetch(res.default))
      .then(res => res.text())
      .then(text => setContent(text));
  }, [postName]);

  return (
    <div style={{ padding: "2rem" }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPage;
