import { useState } from "react";
import NavBar from "./components/NavBar";

//css Import
import "./styles/app.scss";

function App() {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=0e098488165c416b8f3451c972feee06&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  const url = new URLSearchParams(window.location.search);

  return (
    <duv>
      <h1>
        <button>
          <a href={AUTH_URL}>Login</a>
        </button>
        {url}
      </h1>
    </duv>
  );
}

export default App;
