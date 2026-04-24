
function App() {
  const nome = 'Andre';
  const ativo = false;
  const titulo = <h1>Titulo 1</h1>

  const estiloP = {
    color: 'red',
    textDecoration: 'underline',
  }

  return (
    <>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />

      {titulo}

      <p style={estiloP} className={ativo ? 'ativo' : 'inativo'}>Olá, {nome}</p>
    </>
  )
}

export default App
