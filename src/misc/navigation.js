//navigation array

//icons

import { home, search, library } from "./icons/navigation";

// components

import SearchBox from "../components/loggedComponents/SearchBox";

const navigation = () => {
  return [
    {
      id: 1,
      name: "Home",
      path: "/",
      logo: home(),
      components: "",
    },
    {
      id: 2,
      name: "Search",
      path: "/search",
      logo: search(),
      components: SearchBox(),
    },
    {
      id: 3,
      name: "Your Library",
      path: "/collections",
      logo: library(),
      components: "",
    },
  ];
};

export default navigation;
