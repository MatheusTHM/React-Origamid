import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Head from './Head';
import Produtos from './Produtos';
import Produto from './Produto';
import Contato from './Contato';

const App = () => {
  return (
    <BrowserRouter>
      <Head title="Ranek" />
      <nav>
        <Link to="/">
          <button>Produtos</button>
        </Link>{' '}
        <Link to="/contato">
          <button>Produtos</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
