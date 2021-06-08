import React, { useState, createContext } from "react";
import axios from "axios";

// urls
import { SearchURL } from "../BaseUrl";
import { useSelector } from "react-redux";

export const searchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);

  const tokens = useSelector((state) => state.userCredentials);

  const handleSearch = (e, searchValue) => {
    e.preventDefault();
    if (!searchValue.trim()) return setTracks([]);
    setTimeout(() => {
      axios
        .get(`${SearchURL}/${tokens.tokenAccess}/${searchValue}`)
        .then((data) => {
          console.log(data.data.body.tracks.items);
          setTracks(data.data.body.tracks.items);
        })
        .catch((err) => console.log(err));
    }, 1000);
  };

  const contextValues = {
    songs: [tracks, setTracks],
    searchFuncs: [handleSearch],
  };

  return (
    <searchContext.Provider value={contextValues}>
      {children}
    </searchContext.Provider>
  );
};
