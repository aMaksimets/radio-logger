import React from "react";
import MyNav from "./components/MyNav.js";
import { Switch, Route } from "react-router-dom";


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
            <Route path='/swlform'>
              <Swlform />
            </Route>
        </Switch>
    </div>
  );
}

export default App;