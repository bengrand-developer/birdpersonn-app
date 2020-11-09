import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

import './App.css';


function App() {
  return (
    <div className="App">
      Rick and Morty Show
      <Switch>
        <Route exact path= "/" component={CharacterList} />
        <Route path = "/character/:id" component={CharacterDetail} />
      </Switch>

    </div>
  );
}

export default App;
