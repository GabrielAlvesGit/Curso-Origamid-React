import React from 'react'

export const Modal = ({modal, setModal}) => {
    if(modal === true) {
        return (
            <div>
                <div>Modal</div>
                <button onClick={() => setModal(false)}>Fechar</button>
            </div>
        )
    }
    return null;
}

export default Modal;

