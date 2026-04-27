import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

function App() {
  const [modal, setModal] = useState(false);

    return (
      <>
        <Modal modal={modal} setModal={setModal}></Modal>
        <Button setModal={setModal}/>
      </>
    );
}

export default App
