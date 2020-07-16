import React from 'react';
import './App.css';


import { Route, BrowserRouter } from 'react-router-dom';

import Menu from './pages/Menu';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <div id="main-container">
      <BrowserRouter>
        <Menu />
        <Route component={Projects} path="/" exact/>
        <Route component={Blog} path="/blog" exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
