import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

//css Import
import "./styles/app.scss";

function App() {
  return (
    <div>
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
