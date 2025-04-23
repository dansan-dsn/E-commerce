import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Button component={Link} to="/signup" variant="contained">
      Sign Up
    </Button>
  );
};

export default Home;
