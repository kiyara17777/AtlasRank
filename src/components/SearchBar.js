import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query); // send query to parent
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-64 rounded-l-md"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
