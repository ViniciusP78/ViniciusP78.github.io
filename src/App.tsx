import React from 'react';

import Overview from './Components/Overview';
import Profile from './Components/Profile'

import GlobalStyle from './styles/global';

import { Container } from './styles'


const App:React.FC = () => {
  return (
    <Container>
      <Profile />
      <Overview />
      <GlobalStyle />
    </Container>
  );
}

export default App;
