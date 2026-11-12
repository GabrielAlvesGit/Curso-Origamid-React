import React from 'react';




const App = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form action="">
      <textarea value={textarea} onChange={({target}) => setTextarea(target.value)} name="" id="" rows={5}/>
        {textarea}
    </form>
  );
};

export default App;
