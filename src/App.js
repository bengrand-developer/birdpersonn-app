import React from "react";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      Rick and Morty Show
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;
