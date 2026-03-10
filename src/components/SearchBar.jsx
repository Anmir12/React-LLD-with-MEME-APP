import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(t);
    };
  }, [searchInput]);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${searchInput}`,
    );
    const json = await data.json();
    setSuggestions(json[1]);
  };
  console.log(suggestions);
  return (
    <div
      className="flex  flex-col items-center justify-center"
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setShowSuggestions(false)}
    >
      <div className="flex items-center justify-center gap-1">
        <input
          type="text"
          placeholder="please enter your search"
          value={searchInput}
          onChange={(e) => handleInputChange(e)}
          className="border border-solid border-black w-96 mt-2 p-4 rounded-md"
        />
        <button className="border border-solid border-black mt-2 p-4 rounded-md">
          Search
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="flex flex-col border border-solid border-black w-4/12 mt-1 rounded-md h-48 overflow-y-scroll">
          {suggestions?.map((suggestion, idx) => {
            return <p key={idx}>{suggestion}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
