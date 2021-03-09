import React from 'react';

import { Container, Section, Cards, Card,ProjectLogo, Tags, Info, Links } from './styles'

import { FiExternalLink, FiGithub } from 'react-icons/fi'


const Overview: React.FC = () => {
  return (
    <Container>
      <h1>Resumo </h1>
      <Section>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Section>

      <h1>Formação</h1>
      <Section>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Section>

      <h1>Projetos</h1>
      <Cards>
        <Card>
          <ProjectLogo>
            Notes
          </ProjectLogo>
            <Tags>
              <span>
                React
              </span>
              <span>
                TypeScript
              </span>
            </Tags>
            
            <Info>Um simples bloco de anotações que utiliza Markdown.</Info>
            <Links>
              <a href="https://viniciusp78.github.io/notes-app/" target="_blank" rel="noreferrer">
                <FiExternalLink />
                <span>Visualizar</span>
              </a>
              <a href="https://github.com/ViniciusP78/notes-app/" target="_blank" rel="noreferrer">
                <FiGithub />
                <span>Código Fonte</span>
              </a>
            </Links>
        </Card>
        <Card>
          <ProjectLogo>
            Move.it
          </ProjectLogo>
            <Tags>
              <span>
                React
              </span>
              <span>
                TypeScript
              </span>
              <span>
                Next.js
              </span>
            </Tags>
            
            <Info>Repositório da aplicação Moveit da quarta edição do Next Level Week da RocketSeat, na trilha React.</Info>
            <Links>
              <a href="https://moveit-orpin-three.vercel.app" target="_blank" rel="noreferrer">
                <FiExternalLink />
                <span>Visualizar</span>
              </a>
              <a href="https://github.com/ViniciusP78/NLW04-moveit" target="_blank" rel="noreferrer">
                <FiGithub />
                <span>Código Fonte</span>
              </a>
            </Links>
        </Card>
        <Card>
          <ProjectLogo>
            Mais em breve!
          </ProjectLogo>
        </Card>
      </Cards>
      
    </Container>
  )
}

export default Overview