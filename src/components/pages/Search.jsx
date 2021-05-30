import React, { useContext } from "react";
import { searchContext } from "../../context/SearchContext";
import SearchBody from "../loggedComponents/SearchBody";

const Search = () => {
  const { songs } = useContext(searchContext);
  const [tracks, setTracks] = songs;
  return (
    <div className="searchHero">
      {tracks.length ? <SearchBody tracks={tracks} /> : ""}
      <div></div>
    </div>
  );
};

export default Search;

// {tracks.map((item) => (
//   <div>{item.name}</div>
// ))}
