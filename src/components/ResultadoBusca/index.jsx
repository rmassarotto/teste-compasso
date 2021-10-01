import React, { useState } from 'react';
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { IoChevronBack as BackIcon } from 'react-icons/io5'

import CardInfoUser from './../CardInfoUser'

import './style.css'

const ResultadoBusca = () => {
  const history = useHistory();
  const { username } = useParams();
  const [resultado, setResultado] = useState([])
  const [tituloList, setTituloList] = useState([])

  const handleRepoClick = async () => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
    setTituloList(<h2 className="title-list">Repositories</h2>)
    setResultado(data)
  }
  const handleStarredClick = async () => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/starred`)
    setTituloList(<h2 className="title-list">Starred</h2>)
    setResultado(data)
  }
  const handleVoltarClick = async () => {
    history.goBack();
  }

  return (
    <>
      <Container className="mt-5">
        <Button variant="secondary" onClick={handleVoltarClick}><BackIcon /> Voltar</Button>
        <br />
        <CardInfoUser
          className=""
          username={username}
          handleRepoClick={handleRepoClick}
          handleStarredClick={handleStarredClick}
        />

        {/* todo -> Novo componente para listagem */}
        {tituloList}
        <ListGroup className="mt-2 mb-5">
          {resultado.map((result) => (
            <ListGroup.Item key={result.id}>{result.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default ResultadoBusca;