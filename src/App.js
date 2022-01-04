import React from 'react';
import MyNav from './elements/MyNav.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './elements/SignIn';
import HamLog from './elements/HamLog';
import SwlLog from './elements/SwlLog';
import MwLog from './elements/MwLog';
import ScanLog from './elements/ScanLog';
import './App.css';

const App = () => {
  return (
    <section className='App'>
      <Router>
        <MyNav>
          <Routes>
            <Route exact path='/' element={'/'} />
            <Route exact path='/signin' element={<SignIn />} />

            <Route exact path='/hamlog' element={<HamLog />} />

            <Route exact path='/mwlog' element={<MwLog />} />

            <Route exact path='/swllog' element={<SwlLog />} />

            <Route exact path='/vhflog' element={<ScanLog />} />

            <Route path='/contestlog' element={<SwlLog />} />

            <Route path='/settings' element={<SwlLog />} />
          </Routes>
        </MyNav>
      </Router>
    </section>
  );
};
export default App;
