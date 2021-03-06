import React, { useEffect, useState } from 'react';

import { Container, Grid, Segment, Menu, MenuItemProps, Image, Card, Placeholder, List, Button, Flag } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import axios from 'axios';

import Overview from './components/Overview';
import Projects from './components/Projects';

interface IGitData {
  avatar_url: string
}

function App() { // Adicionar seletor de línguas
  const [ activeMenu, setActiveMenu ] = useState<string>();
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ gitData, setGitData ] = useState<IGitData>();

  useEffect(() => {
    axios.get('https://api.github.com/users/viniciusp78')
      .then((response) => {
        setGitData(response.data)
        setLoading(false);
      })
      .catch((response) => {
        console.log(response);
      })
  },[])


  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name } : MenuItemProps) => {
    setActiveMenu(name);
  }

  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <Card>
          {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={gitData?.avatar_url} />
              )}
          <Card.Content>
            <Card.Header>Vinícius Pereira</Card.Header>
            <Card.Meta>Desenvolvedor Full-Stack</Card.Meta>
            <Card.Meta>Brasileiro</Card.Meta>
            <Card.Meta>20 Anos</Card.Meta>
          </Card.Content>
          <Card.Content>
            <List>
              <List.Item
                icon='github'
                content={<a href='https://github.com/ViniciusP78'>Github</a>}
              />
              <List.Item
                icon='linkedin'
                content={<a href='https://www.linkedin.com/in/vinicius-p-44765813a/'>LinkedIn</a>}
              />
            </List>
          </Card.Content>
          </Card>
          
        </Grid.Column>

        <Grid.Column width={12}>
          <Router>
            <Menu pointing secondary>
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

              {/* <Menu.Menu position='right'>
                <Menu.Item>
                  <Button.Group compact basic size='mini'>
                    <Button basic color='blue'>BR</Button>
                    <Button>EN</Button>
                  </Button.Group>
                </Menu.Item>
              </Menu.Menu> */}
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
