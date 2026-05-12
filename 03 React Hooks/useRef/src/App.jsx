import React from 'react';
import Produto from './Produtos';

const App = () => {
  const [total, setTotal] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef(null);

  function handleClick() {
    setTotal(total + 10);
    setNotificacao('Produto adicionado no carrinho');
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }


  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar no Carrinho</button>
    </div>
  );
};

export default App;
