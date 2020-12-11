import React from "react";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import Header from "./components/Header";
import Video from "./components/Video";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;
