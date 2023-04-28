import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/signup">Signup</Link>
      </button>
      <button>
        <Link to="/podcasts">podcasts table</Link>
      </button>
      <button>
        <Link to="/SearchBar">Search Bar</Link>
      </button>
    </div>
  );
};

export default Home;
