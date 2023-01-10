import React from "react";

function Search({searchPlant, updateSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchPlant}
        placeholder="Type a name to search..."
        onChange={(e)=>updateSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
