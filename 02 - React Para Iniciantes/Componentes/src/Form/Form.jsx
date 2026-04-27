import React from 'react'
import Input from './Inpunt';
import Button from './Button';

export const Form = () => {
  return (
    <form action="">

        <p>
            <label htmlFor="nome">Nome</label>
            <Input/>
        </p>

        <p>
            <label htmlFor="email">Email</label>
            <Input/>
        </p>

        <Button/>
    </form>
  )
}

export default Form;
