import React from 'react';

import { Divider, Header, Segment } from 'semantic-ui-react';

const Overview = () => {
  return (
    <Segment stacked>
      <Header as='h1'>
        Overview
      </Header>
      <Divider />

      <Header as='h2'>
      Sobre mim
      </Header>
      <Divider />
      <p>
        em construção...
      </p>

      <Header as='h2'>
        Formação Acadêmica
      </Header>
      <Divider />
      <Header as='h3'>Analista de Sistemas (2019 - Atualmente)</Header>
      <Header as='h3'>Técnico em Informática para Internet (2016 - 2018)</Header>
    </Segment>
  )
}

export default Overview