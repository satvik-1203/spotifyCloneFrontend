import SearchBox from "../components/loggedComponents/SearchBox";

const components = () => [
  {
    id: 1,
    name: "home",
    components: "",
  },
  {
    id: 2,
    name: "search",
    components: <SearchBox />,
  },
  {
    id: 3,
    name: "library",
    components: "",
  },
];

export default components;
