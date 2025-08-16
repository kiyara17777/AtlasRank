import React, { useState } from "react";
import { sampleResults } from "../data";
import ResultCard from "../components/ResultCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [filteredResults, setFilteredResults] = useState(sampleResults);

  const handleSearch = (query) => {
    const filtered = sampleResults.filter((result) =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Welcome to AtlasRank 🌍
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Search smarter, explore better.
      </p>

      <div className="mt-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="mt-8">
        {filteredResults.length > 0 ? (
          filteredResults.map((result) => (
            <ResultCard
              key={result.id}
              title={result.title}
              description={result.description}
              link={result.link}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
