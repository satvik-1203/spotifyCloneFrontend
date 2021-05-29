import React, { useContext } from "react";
import { searchContext } from "../../context/SearchContext";

const Search = () => {
  const { songs } = useContext(searchContext);
  const [tracks, setTracks] = songs;

  return (
    <div>
      {tracks.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Search;
