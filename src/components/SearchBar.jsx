import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const t = setTimeout(() => {
      if (cache[searchInput]) {
        setSuggestions(cache[searchInput]);
      } else {
        fetchData();
      }
    }, 300);

    return () => clearTimeout(t);
  }, [searchInput]);

  const fetchData = async () => {
    if (!searchInput) return;
    const data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${searchInput}`
    );
    const json = await data.json();
    setSuggestions(json[1]);

    // Updating Cache Object
    setCache((prev) => ({
      ...prev,
      [searchInput]: json[1],
    }));
  };

  return (
    <div className="flex flex-col items-center relative py-8">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-400 w-96 p-3 rounded-full px-6 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 text-white p-3 px-6 rounded-full font-bold">
          Search
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-[85px] bg-white border border-gray-200 w-5/12 rounded-xl shadow-2xl z-50">
          <ul className="py-2">
            {suggestions.map((s, idx) => (
              <li 
                key={idx} 
                className="px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-2"
                onClick={() => setSearchInput(s)}
              >
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;