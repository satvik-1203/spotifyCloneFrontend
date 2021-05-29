import React, { useRef, useEffect, useState } from "react";

// icons

import { search } from "../../misc/icons/navigation";
import axios from "axios";

// urls

import { SearchURL } from "../../BaseUrl";

const SearchBox = () => {
  const searchInput = useRef("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     axios
  //       .get(`${SearchURL}/wow`)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, 2000);
  // }, [searchInput]);

  return (
    <div className="searchBoxContainer">
      <div id="searchLogo">{search()}</div>
      <input
        ref={searchInput}
        placeholder="Artists, songs, or podcasts"
        type="text"
      />
    </div>
  );
};

export default SearchBox;
