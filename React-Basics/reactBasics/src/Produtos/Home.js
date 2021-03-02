import React from 'react';
import Links from './Links';
import Produtos from './Produtos';
import Titulo from './Titulo';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const { pathname } = window.location;

const Home = () => {
  return (
    <div>
      <Links />

      {pathname.includes('/produtos') ? (
        <Produtos prods={produtos} />
      ) : (
        <>
          <Titulo titulo="Home" /> <p>Essa é a home do site</p>
        </>
      )}
    </div>
  );
};

export default Home;
