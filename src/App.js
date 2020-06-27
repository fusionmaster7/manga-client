import React from "react";
import Home from "./Components/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Manga from "./Components/Manga";
import Chapter from "./Components/Chapter";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/manga/:manga" component={Manga} />
      <Route path="/manga/:manga/:chapter" component={Chapter} />
    </Router>
  );
};
export default App;
