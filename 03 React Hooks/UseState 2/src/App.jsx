import { useState } from 'react';

function App() {
  const [contar, setContar] = useState(1);
  const [items, setItems] = useState(['item 1']);

  function handleClick() {
    setItems((items) => [...items, 'item' + (contar + 1)]);
    setContar((contar) => contar + 1);
  }

    return (
      <>
      {items.map((item) => (<li key={item}>{item}</li>))}
      <button onClick={handleClick}>+ {contar}</button>
      </>
    );
}

export default App
