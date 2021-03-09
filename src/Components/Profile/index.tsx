import React from 'react';

import { Container } from './styles'

import {SiGithub, SiLinkedin} from 'react-icons/si';


const Profile: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="https://github.com/viniciusp78.png" alt="Foto"/>
      </div>
      
      <div className='profile'>
        <strong>Vinícius Pereira</strong>
        <p>Desenvolvedor Full-Stack</p>
        <p>Brasileiro</p>
        <p>20 Anos</p>
      </div>
      <div className='links'>
        <a href="https://github.com/ViniciusP78" target="_blank" rel="noreferrer">
          <SiGithub />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/vinicius-p-44765813a/" target="_blank" rel="noreferrer">
          <SiLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </Container>
  )
}

export default Profile