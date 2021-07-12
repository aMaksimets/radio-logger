import React from "react";
import MyNav from "./components/MyNav.js";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import HamLog from "./components/HamLog";
import SwlLog from "./components/SwlLog";

function App() {
  
  return (
    <div>
      <MyNav />
        <Switch>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/hamform'>
              <HamLog />
            </Route>
            <Route path='/swllog'>
              <SwlLog />
            </Route>
        </Switch>
    </div>
  );
}

export default App;