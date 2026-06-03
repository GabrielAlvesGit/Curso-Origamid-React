import React from 'react';
import { GlobalContext } from './GlobalContext';


const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (!global.dados) return null;

  return (
    <div>
      Produto:
      {global.dados.map((produto) => (
        <p key={produto.id}>{produto.nome}</p>
      ))}
    </div>
  );
};

export default Produto;