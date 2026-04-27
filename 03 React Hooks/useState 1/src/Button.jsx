import React from 'react'

export const Button = ({setModal}) => {
  return (
    <button onClick={() => setModal(true)}>Abrir</button>
  )
}

export default Button;
