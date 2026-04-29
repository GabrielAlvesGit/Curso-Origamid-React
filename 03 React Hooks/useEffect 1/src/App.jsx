import { useState, useEffect } from 'react';

function App() {
    const [contar, setContar] = useState(0)
    const [dados, setDados] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setDados(json)
            })
    }, [])

    return (
      <>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>{dados.preco * contar}</p>
        </div>
      )}
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </>
    );
}

export default App
