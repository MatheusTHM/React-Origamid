import React from 'react';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const resposta = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
      );
      const json = await resposta.json();
      setLoading(false);
      setResponse(json);
    }
    fetchData();
  }, [params]);

  return (
    <div className="animeLeft">
      <p>Produto: {params.id}</p>
      {loading && <p>Carregando</p>}
      {!loading && response && console.log(response)}
      {!loading && response && (
        <div>
          <div>
            <img src={response.fotos[0].src} alt="" />
            <img src={response.fotos[1].src} alt="" />
          </div>
          <div>
            <h1>{response.nome}</h1>
            <p>{response.preco}</p>
            <p>{response.descricao}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Produto;
