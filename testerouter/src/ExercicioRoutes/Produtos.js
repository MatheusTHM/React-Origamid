import React from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css';

const Produtos = () => {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const resposta = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      const json = await resposta.json();
      setLoading(false);
      setResponse(json);
    }
    fetchData();
  }, []);

  return (
    <div className="animeLeft">
      <h1>produtos</h1>
      {loading && <p>Carregando</p>}
      {!loading &&
        response &&
        response.map(({ nome, fotos, id }) => (
          <div key={id} className="produto">
            <Link to={`/produto/${id}`}>
              <img src={fotos[0].src} alt={fotos[0].titulo} />
            </Link>
            <p>{nome}</p>
          </div>
        ))}
      {!loading && response && console.log(response)}
    </div>
  );
};

export default Produtos;
