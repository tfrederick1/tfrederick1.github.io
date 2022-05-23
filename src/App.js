import React, { Component } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home.js';
import Portfolio from './Pages/Portfolio.js';

class App extends Component {
  render () {
    return (
      <div class="base">
        <div class="nav-bar">
          <div class="link-container">
            <a href="/">Home</a>
          </div>
          <div class="link-container">
            <a href="/portfolio">Portfolio</a>
          </div>
          <div class="link-container">
            <a href="/resume">Resume</a>
          </div>
          <div class="link-container">
            <a href="/about">About Me</a>
          </div>
        </div>
        <div class="pages">
          <BrowserRouter>
            <Routes>
              <Route path="*" element={
                <Home />
              }/>
              <Route path="/portfolio" element={
                <Portfolio />
              }/>
            </Routes>
          </BrowserRouter>
        </div>    
      </div>
    );
  }
}

export default App;