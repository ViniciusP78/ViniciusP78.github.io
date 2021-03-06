import React from 'react';

import {Divider, Header, Segment } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';

import projects from '../projects';

const Projects = () => {

  return (
    <Segment stacked>
      <Header as='h1'>
        Projects
      </Header>
      <Divider />

      {
        
        projects.map(item => <ProjectCard {...item} />)
      }

    </Segment>
  )
}

export default Projects