import React from 'react'
import Input from './Inpunt';
import Button from './Button';

export const Form = () => {
  const array = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
        <Input label="Email" type="Email" required/>
        <Input id="password" label="Password" type="senha" required/>
        <Button itens={array}/>
    </div>
  )
}

export default Form;
