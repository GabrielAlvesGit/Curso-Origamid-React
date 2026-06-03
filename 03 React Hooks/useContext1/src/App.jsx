import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext.jsx'



const App = () => {

  return (
    <div>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </div>
  );
};

export default App;
