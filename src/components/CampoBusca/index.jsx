import React from 'react';
import { useState } from 'react';

import { InputGroup, FormControl, Button, Container } from 'react-bootstrap';
import { FaSearch as SearchIcon } from 'react-icons/fa'
import './style.css'

const CampoBusca = ({ handleInputBusca }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  }

  const handleBuscarUserClick = () => {
    handleInputBusca(inputData)
  }

  return (
    <>
      <Container className="mt-5 busca-container">
        <InputGroup>
          <FormControl
            placeholder="Buscar usuário"
            value={inputData}
            onChange={handleInputChange}
          />
        </InputGroup>

        <Button
          className="busca-button"
          variant="secondary"
          onClick={handleBuscarUserClick}
        ><SearchIcon /> Buscar</Button>
      </Container>
    </>
  );
}

export default CampoBusca;