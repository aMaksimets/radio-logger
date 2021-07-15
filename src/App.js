import React from "react";
import MyNav from "./components/MyNav.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import HamLog from "./components/HamLog";
import SwlLog from "./components/SwlLog";

function App() {
  
  return (
    <Router>
    <div>
      <MyNav />
        <Switch>
            <Route path='/'>
              <SwlLog/>
            </Route>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route>
              <HamLog />
            </Route>
            <Route path='/swllog'>
              <SwlLog />
            </Route>
            <Route path='/vhflog'>
              <SwlLog />
            </Route>
            <Route path='/contestlog'>
              <SwlLog />
            </Route>
        </Switch>
    </div>
    </Router>
  );
};

export default App;