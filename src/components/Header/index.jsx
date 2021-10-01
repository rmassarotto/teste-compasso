import React from 'react';
import { Container } from 'react-bootstrap';

import { FaGithub as GitIcon } from 'react-icons/fa'
import './style.css'

const Header = () => {
  return (
    <Container className="mt-5 text-center">
      <GitIcon className="icon-size" />
      <h1 className="title-font">Busca Github</h1>
    </Container>
  );
}

export default Header;