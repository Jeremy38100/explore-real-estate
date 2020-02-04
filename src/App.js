import { FocusStyleManager, Card } from "@blueprintjs/core";
import React, { useState } from 'react';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
  const [isDark, setIsDark] = useState(false);
  const switchDarkMode = () => setIsDark(!isDark);

  return (
    <div className={'bp3-card' + (isDark ? ' bp3-dark' : '')} id="body">
      <Router >
        <Nav switchDarkMode={switchDarkMode}></Nav>
        <div id="container">
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/app">
              App
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
