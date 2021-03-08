import React from 'react';
import Head from './Head';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Descrição da Home" />
      <h1>Home</h1>
      <p>Essa é a Home</p>
      {/* <Link to="produto/notebook">Notebook</Link> |{' '}
      <Link to="produto/smartphone">Smartphone</Link> */}
    </div>
  );
};

export default Home;
