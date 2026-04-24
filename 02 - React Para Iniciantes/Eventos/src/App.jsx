
function App() {
    function handleClick(event) {
      console.log(event.target);
    }

    return (
    <button onClick={handleClick}>Clique</button>
    );
}

export default App
