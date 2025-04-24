import { Link } from "react-router-dom";
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// Sample blog metadata - ideally this should be dynamic in future.
const posts = [
  {
    title: "You can known star world",
    slug: "star-world",
  },
  {
    title: "Known about India",
    slug: "india",
  },
];

const Home = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        नवीनतम विचार ✨
      </Typography>

      <List>
        {posts.map((post) => (
          <ListItem key={post.slug} disablePadding>
            <ListItemButton component={Link} to={`/post/${post.slug}`}>
              <ListItemText primary={post.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Home;
