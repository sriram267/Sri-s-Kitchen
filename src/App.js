import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AboutUs, FindUs, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/specialMenu" element={<SpecialMenu />} />
      <Route path="/laurels" element={<Laurels />} />
      <Route path="/findUs" element={<FindUs />} />
      <Route />
    </Routes>
  </div>
);

export default App;
