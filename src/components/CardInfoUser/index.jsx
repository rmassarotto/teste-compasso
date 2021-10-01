import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Card, Button, Alert } from 'react-bootstrap';
import { RiGitRepositoryFill as RepoIcon } from 'react-icons/ri'
import { BsStarFill as StarIcon } from 'react-icons/bs'
import './style.css'

const CardInfoUser = ({ username, handleRepoClick, handleStarredClick }) => {
  const [userGit, setUserGit] = useState([])
  const [erroMessage, setErrorMessage] = useState([])
  let linkedinLink;
  let cardUserInfo;

  useEffect(() => {
    const fetchUserGit = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${username}`)
        setUserGit(data)
      } catch (error) {
        setErrorMessage(<h1 className="text-center mt-5">Ops! Não foi possivel carregar esse usuário</h1>)
        console.error(error);
      }
    }
    fetchUserGit();
  }, [username]);

  if (userGit.length !== 0) {

    if (userGit.blog) {
      linkedinLink = <Alert.Link href={userGit.blog} target="_blank">LinkedIn</Alert.Link>
    }

    cardUserInfo = (
      <Card style={{ width: '20rem' }} className="center">
        <Card.Img variant="top" src={userGit.avatar_url} />
        <Card.Body>
          <Card.Title>{userGit.name}</Card.Title>
          <Card.Text>
            {userGit.location ? userGit.location : ''}
            <br />
            {linkedinLink}
          </Card.Text>
          <Button variant="secondary" onClick={handleRepoClick}><RepoIcon /> Repos</Button>
          <Button className="m-2" variant="secondary" onClick={handleStarredClick}><StarIcon /> Starreds</Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <>
      {erroMessage}
      {cardUserInfo}
    </>
  );
}

export default CardInfoUser;