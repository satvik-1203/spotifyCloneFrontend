import React from "react";
import HomeNotLogged from "../components/pages/HomeNotLogged";

//redux
import { useSelector } from "react-redux";
import HomeLogged from "../components/pages/HomeLogged";

const HomePage = () => {
  const userData = useSelector((state) => state.userInfoData);

  return <div>{!userData ? <HomeNotLogged /> : <HomeLogged />}</div>;
};

export default HomePage;
