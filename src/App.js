import React from "react";
import Home from "./Components/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Manga from "./Components/Manga";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/manga/:manga" component={Manga} />
    </Router>
  );
};
export default App;
