import React from 'react'
import { GlobalContext } from './GlobalContext'

const Limpar = () => {
    const global = React.useContext(GlobalContext)
    
  return (
    <button onClick={global.limparDados} style={{cursor: 'pointer'}}>
        Limpar
    </button>
  )
}

Limpar.propTypes = {}

export default Limpar