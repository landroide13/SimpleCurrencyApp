import React from 'react';

import './App.css';
import M from 'materialize-css';
import Detail from './components/Detail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>React <span className="title">CoinApp</span></h1>
        <hr />
        <Search />
        <hr />
        <Switch>
          <Route exact path="/currency/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
