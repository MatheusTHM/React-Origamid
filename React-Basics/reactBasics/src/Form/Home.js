import React from 'react';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';

const Home = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os Termos.']}
        value={termos}
        setValue={setTermos}
      />
      <h2>Checkboxes</h2>
      <Checkbox
        options={['JS', 'PHP', 'SQL']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h2>Cores</h2>
      <Radio options={['azul', 'vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio options={['Maçã', 'Goiaba']} value={frutas} setValue={setFrutas} />
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default Home;
