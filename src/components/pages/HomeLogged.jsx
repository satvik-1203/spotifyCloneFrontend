import React from "react";

import SideBar from "../loggedComponents/SideBar";

import Hero from "../loggedComponents/Hero";

// react router dom

import { Switch, Route } from "react-router-dom";
import Search from "./Search";
import NavBar from "../loggedComponents/NavBar";

import { SearchProvider } from "../../context/SearchContext";
import CurrentSong from "../../context/CurrentSong";
import Audio from "../loggedComponents/Audio";

const HomeLogged = () => {
  return (
    <CurrentSong>
      <SearchProvider>
        <div className="homeLog">
          <div className="sideBar">
            <SideBar />
          </div>
          <Switch>
            <div className="content">
              <div className="navBar">
                <NavBar />
              </div>
              <Route path="/" exact>
                <Hero />
              </Route>
              <Route path="/search" exact>
                <Search />
              </Route>
            </div>
          </Switch>
          {<Audio /> || ""}
        </div>
      </SearchProvider>
    </CurrentSong>
  );
};

export default HomeLogged;
