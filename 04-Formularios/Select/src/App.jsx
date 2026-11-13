import React from 'react';




const App = () => {
  const [select, setSelect] = React.useState('');

  return (
    <form value={select} onChange={({target}) => setSelect(target.value)} action="">
      <select id="produtos">
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
