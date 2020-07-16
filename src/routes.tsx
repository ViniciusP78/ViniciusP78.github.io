import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Menu from './pages/Menu'

const Routes = () => {
    return(
        <BrowserRouter>
            <Menu />
            <Route component={Projects} path="/" exact/>
            <Route component={Blog} path="/blog" exact/>
        </BrowserRouter>
    )
}

export default Routes;