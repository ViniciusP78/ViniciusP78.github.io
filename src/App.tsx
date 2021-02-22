import React, { useState } from 'react';

import { Container, Grid, Segment, Menu, MenuItemProps } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Overview from './components/Overview';
import Projects from './components/Projects';

function App() {
  const  [activeMenu, setActiveMenu ] = useState<string>();

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name } : MenuItemProps) => {
    setActiveMenu(name);
  }

  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <Segment>
            Image
          </Segment>
        </Grid.Column>

        <Grid.Column width={12}>
          <Router>
            <Menu attached='top'>
              <Menu.Item
                as={Link} to='/'
                name='overview'
                active={activeMenu === 'overview'}
                onClick={handleMenuClick}
              >
                Overview
              </Menu.Item>
              <Menu.Item
                as={Link} to='/projects'
                name='projects'
                active={activeMenu === 'projects'}
                onClick={handleMenuClick}
              >
                Projects
              </Menu.Item>
            </Menu>
            <Switch>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='/'>
                <Overview />
              </Route>
            </Switch>
          </Router>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
