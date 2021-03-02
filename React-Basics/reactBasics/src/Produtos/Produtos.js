import React from 'react';
import Produto from './Produto';
import Titulo from './Titulo';

const Produtos = ({ prods }) => {
  return (
    <div>
      <Titulo titulo="Produtos" />
      {prods.map(({ nome, propriedades }) => (
        <div
          key={nome}
          style={{
            border: '1px solid',
            margin: '1rem',
            padding: '1rem',
            fontWeight: '600',
          }}
        >
          <Produto nome={nome} propriedades={propriedades} />
        </div>
      ))}
    </div>
  );
};

export default Produtos;
