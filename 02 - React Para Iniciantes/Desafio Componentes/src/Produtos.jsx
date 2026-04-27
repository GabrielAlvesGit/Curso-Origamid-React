import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto';

export const Produtos = () => {
    const produtos = [
        {nome: "Notebook", propriedade: ["16 ram", "512gb"]},
        {nome: "Smartphone", propriedade: ["2GB RAM", "128GB"]},
    ];

  return (
    <section>
        <Titulo texto="Produtos"/>
        {produtos.map((produto) => (
            <Produto key={produto.nome} produto={produto} {...produto} />
        ))}
    </section>
  )
}

export default Produtos