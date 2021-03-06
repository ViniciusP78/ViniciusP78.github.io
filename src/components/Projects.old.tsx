import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Divider, Header, Segment, Placeholder, Card } from 'semantic-ui-react';

interface IRepos {
  name: string,
  description: string,
  language: string
  html_url:string
}


const Projects = () => {

  const [ repos, setRepos ] = useState<IRepos[]>([]);

  const [ loading, setLoading ] = useState<boolean>(true);


  useEffect(() => {
    axios.all([
      axios.get('https://api.github.com/users/ViniciusP78/repos'),
      axios.get('https://api.github.com/users/ViniciusP78/subscriptions')
    ])
      .then((response)=> {
        
        let repoData = response[0].data;
        let subsData = response[1].data;
        
        let filter: any[] = [];

        repoData.forEach((item: any) => {
          subsData.forEach((item2: any) => {
            if(item.id === item2.id){
              filter.push(item);
            }
          })
        })

        setRepos(filter);

        setLoading(false);
      })
  },[])

  return (
    <Segment>
      <Header as='h1'>
        Projects
      </Header>
      <Divider />
      {/* {
        repos?.map((item) => {
          console.log(item)
        })
      } */}
      {loading ? (
        <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
        ) : (
          <Card.Group itemsPerRow={3}>
            {repos.map((item, index) => (
              <Card key={index}>
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                </Card.Content>
                
              </Card>
            ))}
          </Card.Group>
        )
      }
    </Segment>
  )
}

export default Projects