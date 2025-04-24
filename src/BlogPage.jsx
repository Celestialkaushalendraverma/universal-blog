import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  Typography,
  Paper,
  Box,
  Divider,
} from "@mui/material";

function BlogPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
        bgcolor: "background.paper",
        boxShadow: 1,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color="primary"
        gutterBottom
        sx={{ textTransform: "capitalize" }}
      >
        {slug.replace(/-/g, " ")}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box className="markdown-body" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
    </Paper>
  );
}

export default BlogPage;
