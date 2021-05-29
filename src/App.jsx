import { Route } from "react-router";
import HomePage from "./pages/HomePage";

//css Import
import "./styles/app.scss";

function App() {
  return (
    <div>
      <Route path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
