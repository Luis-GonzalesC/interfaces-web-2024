import { useState } from 'react';
import './App.css';
import Galeria from './Galeria.js';
import Texto from './Texto.js';

function App() {
  const [valorinput, setvalorInput] = useState();
  
  const cambio = (e)=>{
    setvalorInput(e.target.value);
  }
  

  return (
    <>
      {/*<Galeria/>
      <Texto/>*/}

        <input onChange={cambio} type='text' name='si' value={valorinput}/>
        <p>{valorinput}</p>

    </>
  );
}

export default App;
