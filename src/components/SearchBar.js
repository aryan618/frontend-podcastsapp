import React, { useState } from "react";
import axios from "axios";

const PodcastResult = ({ result }) => {
  return (
    <div key={result.id}>
      <h2>{result.title}</h2>
      <p>{result.description}</p>
      <audio controls>
        <source src={result.audio} type="audio/mpeg" />
      </audio>
    </div>
  );
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    axios
      .get(`https://backendd-eight.vercel.app/search?q=${searchTerm}`)
      .then((response) => setSearchResults(response.data))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for podcasts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.results &&
        searchResults.results.map((result) => (
          <PodcastResult result={result} />
        ))}
    </div>
  );
};

export default SearchBar;
