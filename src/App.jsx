import { Route } from "react-router";
import NavBar from "./components/NavBar";

//css Import
import "./styles/app.scss";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/" exact>
        <div>Hello</div>
      </Route>
    </div>
  );
}

export default App;
