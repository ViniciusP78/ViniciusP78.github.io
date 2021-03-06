import React from 'react';
import { Card, Icon, Label } from 'semantic-ui-react';

export interface IProject {
  name: string;
  accent: string;
  tags: {
    name: string;
    color: 'black' | "blue" | 'brown' | 'green' | 'grey' | 'olive' | 'orange' | 'pink' | 'purple' | 'red' | "teal" | 'violet' | 'yellow'
  }[];
  description: string;
  url: string;
  source_url: string

}

const ProjectCard = ({name, accent, tags, description, url, source_url} : IProject) => {
  return (
    <Card>
      <div style={{
          backgroundColor: accent,
          color: 'white',
          display: 'flex',
          height: '100px',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '32px',
          fontFamily: 'Ubuntu',
        }}>
          {name}
        </div>
      <Card.Content>
        
      <Card.Header>
      {tags.map(item =><Label color={item.color} horizontal>{item.name}</Label>)}
      </Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <a target='_blank' rel="noreferrer" href={url}>
          <Icon name='external alternate' />
          Visualizar
        </a>
        <a target='_blank' rel="noreferrer" href={source_url}>
          <Icon name='github' />
          Código Fonte
        </a>
      </div>
      
    </Card.Content>
    </Card>
  )
}

export default ProjectCard