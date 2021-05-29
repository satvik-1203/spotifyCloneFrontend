import React, { useRef, useEffect, useState, useContext } from "react";

// icons
import { search } from "../../misc/icons/navigation";

// context
import { searchContext } from "../../context/SearchContext";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchFuncs } = useContext(searchContext);

  const [handleSubmit] = searchFuncs;

  return (
    <div className="searchBoxContainer">
      <form onSubmit={handleSubmit} className="inputForm">
        <div id="searchLogo" onClick={handleSubmit}>
          {search()}{" "}
        </div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Artists, songs, or podcasts"
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBox;
