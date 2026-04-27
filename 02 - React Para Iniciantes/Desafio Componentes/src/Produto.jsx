import React from 'react'

const Produto = ({nome, propriedade}) => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem", marginBottom: "1rem"}}>
        <p>{nome}</p>
        <ul>
            {propriedade.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
            ))}
        </ul>
    </div>
  )
}

export default Produto;

