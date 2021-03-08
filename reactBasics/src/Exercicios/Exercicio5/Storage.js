import React from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const Storage = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ margin: '1rem' }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ margin: '1rem' }}>
        smartphone
      </button>
      <Produto produto={produto} />
    </div>
  );
};

export default Storage;

//Meu Método

// const Storage = () => {
//   const [produto, setProduto] = React.useState(null);
//   const [preco, setPreco] = React.useState(null);

//   React.useEffect(() => {
//     setProduto(localStorage.getItem('produto'));
//     setPreco(localStorage.getItem('preco'));
//   }, []);

//   React.useEffect(() => {
//     localStorage.setItem('produto', produto);
//     localStorage.setItem('preco', preco);
//   }, [produto, preco]);

//   async function buscar(event) {
//     const response = await fetch(
//       `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
//     );
//     const prod = await response.json();
//     setProduto(prod.nome);
//     setPreco(prod.preco);
//   }

//   return (
//     <div>
//       <button style={{ margin: '.5rem' }} onClick={buscar}>
//         notebook
//       </button>
//       <button style={{ margin: '.5rem' }} onClick={buscar}>
//         smartphone
//       </button>
//       {preco && <Produto nome={produto} preco={preco} />}
//     </div>
//   );
// };

// export default Storage;
