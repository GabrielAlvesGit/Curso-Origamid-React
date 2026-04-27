
function App() {
    function handleClick(event) {
      console.log(event.target);
    }

    window.addEventListener("scroll", handleScroll)

    function handleScroll() {
        console.log("Rolou")
    }

    return (
      <div style={{height: '100vh'}}>
        <button onClick={handleClick}>Clique</button>
      </div>
    );
}

export default App
