import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
// import {useLocation} from 'react-router-dom'
// import { Outlet } from 'react-router-dom';

import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import { NavLink } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  // const location = useLocation();
  // const search = new URLSearchParams(location.search);
  // console.log(search.get('q'));
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="" end>
          Descrição
        </NavLink>{' '}
        | <NavLink to="avaliacao">Avaliação</NavLink> |{' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
};

export default Produto;
