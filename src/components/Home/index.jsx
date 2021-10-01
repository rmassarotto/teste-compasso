import React from 'react';
import { useHistory } from 'react-router-dom'

import Header from './../Header';
import CampoBusca from './../CampoBusca';

const Home = () => {
  const history = useHistory()

  const handleInputBusca = (inputData) => {
    history.push(`/${inputData}`)
  }

  return (
    <>
      <Header />
      <CampoBusca handleInputBusca={handleInputBusca} />
    </>
  );
}

export default Home;