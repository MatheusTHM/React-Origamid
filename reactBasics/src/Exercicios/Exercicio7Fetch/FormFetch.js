import React from 'react';
import useFetch from '../ExemploFetch/useFetch';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );

  const [enviado, setEnviado] = React.useState(false);
  const [resultado, setResultado] = React.useState(false);

  const { request, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { response, json } = await request(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    ); //Fim do Fetch
    console.log(response, json);
    setEnviado(true);
    if (response.ok) setResultado(true);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button>Enviar</button>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {enviado && resultado && !error && !loading && <p>Sucesso!</p>}
      {enviado && !resultado && <p>Erro!</p>}
    </form>
  );
};

export default App;
