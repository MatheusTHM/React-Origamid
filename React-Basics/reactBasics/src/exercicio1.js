import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Exercicio1 = () => {
  const dados = mario;

  const totalGasto = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? ' Ativa' : ' Inativa'}
        </span>
      </p>
      <p>Total Gasto: R$ {totalGasto}</p>
      {totalGasto > 10000 && <p>Você está gastando muito.</p>}
    </div>
  );

  //Meu Método

  // const ativo = {
  //   color: '#FF0000',
  // };

  // const inativo = {
  //   color: '#2E8B57',
  // };

  // const precosFiltro = dados.compras.filter((compras) =>
  //   compras.preco.includes('R$'),
  // );

  // const precosNumero = precosFiltro.map((compras) =>
  //   Number(compras.preco.replace('R$ ', '')),
  // );

  // let totalGasto = precosNumero.reduce((total, sum) => total + sum, 0);

  //let atividade = dados.ativa ? ativo : inativo;

  //Método da aula
};

export default Exercicio1;
