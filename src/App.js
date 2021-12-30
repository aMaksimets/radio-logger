import React, { Component } from "react";
import MyNav from "./components/MyNav.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import HamLog from "./components/HamLog";
import SwlLog from "./components/SwlLog";
import MwLog from "./components/MwLog";
import ScanLog from "./components/ScanLog";
import './App.css';

class App extends Component {
    render() {
        return (
            <section className="App">
                <Router>
                    <MyNav />
                    <Switch>
                        <Route exact path="/" component={"/"}>
                            <HamLog />
                        </Route>
                        <Route exact path='/signin' component={SignIn}>
                            <SignIn />
                        </Route>
                        <Route exact path='/hamlog' component={HamLog}>
                            <HamLog />
                        </Route>
                        <Route exact path='/mwllog' component={MwLog}>
                            <MwLog />
                        </Route>
                        <Route exact path='/swllog' component={SwlLog}>
                            <SwlLog />
                        </Route>
                        <Route exact path='/vhflog' component={ScanLog}>
                            <ScanLog />
                        </Route>
                        <Route path='/contestlog'>
                            <SwlLog />
                        </Route>
                        <Route path='/settings'>
                            <SwlLog />
                        </Route>
                    </Switch>
                </Router>
            </section>
        );
    }
}
export default App;