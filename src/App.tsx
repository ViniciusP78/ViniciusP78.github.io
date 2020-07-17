import React from 'react';
import './App.css';


import { Route, BrowserRouter } from 'react-router-dom';

import Menu from './pages/Menu';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <div id="main-container">
      <BrowserRouter>
        <Menu />
        <div id="content">
          <Route component={Home} path="/" exact/>
          <Route component={Projects} path="/projects" exact/>
          <Route component={Blog} path="/blog" exact/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
