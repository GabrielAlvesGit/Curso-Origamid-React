import React from 'react';

function operacaoLenta() {
  let c = 0
  for(let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  // const valor = React.useMemo(() => {
  //   const localItem = window.localStorage.getItem('produto')
  //   console.log('executou')
  //   return localItem;
  // }, []);

  const t1 = performance.now();
  const valor = React.useMemo(() =>  operacaoLenta(), {});
  console.log(valor);
  console.log(performance.now() - t1);

  const handleClick = React.useCallback(() => {
    setContar((contador) => contador + 1);
  }, []);

  return (
    <div>
      <p>{valor}</p>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
