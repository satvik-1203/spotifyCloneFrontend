import React from "react";
import NavBar from "../NavBar";

const HomeNotLogged = () => {
  return (
    <>
      <NavBar />
      <div className="homePage">
        <div className="hero">
          <div className="heroText">
            <h1>
              Listening is <br /> everything
            </h1>
            <p>Millions of songs and podcasts. No credit card needed.</p>
            <button>GET SPOTIFY FREE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNotLogged;
