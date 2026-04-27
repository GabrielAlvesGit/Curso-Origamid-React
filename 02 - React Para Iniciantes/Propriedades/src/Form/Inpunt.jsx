import React from 'react'

export const Inpunt = ({label, id, type, ...props}) => {
  return (
    <div style={{margin: '10px 0'}}>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} {...props}/>
    </div>
  )
}

export default Inpunt;
