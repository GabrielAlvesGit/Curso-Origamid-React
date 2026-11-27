import React from 'react';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Input from './Form/Input';
import Chackbox from './Form/Chackbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cor, setCor] = React.useState('Vermelho');
  const [frutas, setFrutas] = React.useState('Vermelho');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  if(termos.length > 0) {
    console.log('enviar')
  }

  return (
    <form>
      <h2>Termos</h2>
      <Chackbox options={['Li e aceito os termos.']} value={termos} setValue={setTermos}/>

      <h2>Checkbox</h2>
      <Chackbox options={['JavaScript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens}/>

      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio options={['Limão', 'Laranja', 'Uva']} value={frutas} setValue={setFrutas} />

    
      <Select/>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required/>
      <Input id="email" label="Email" value={email} setValue={setEmail}/>
      <button>Enviar</button>
    </form>
  );
};

export default App;
