import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Settings } from "@mui/icons-material";
import BlogPage from "./BlogPage";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
            🧘‍♂️ Universal Thought
          </Typography>
          <Typography variant="body1" component={Link} to="/" sx={{ color: 'white', textDecoration: 'none', marginRight: 2 }}>
            HOME
          </Typography>
          <IconButton color="inherit">
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<PostWrapper />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
};

const PostWrapper = () => {
  const slug = window.location.pathname.split("/").pop();
  return <BlogPage postName={slug} />;
};

export default App;
