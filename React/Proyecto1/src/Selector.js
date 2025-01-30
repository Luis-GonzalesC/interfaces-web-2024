import './Selector.css';
import { useRef, useState} from 'react';

function Selector() {

  const [selector, setSelector] = useState()


  const eleccion = (e)=>{
    setSelector(e.target.value)
  }

  return (
    <>
      <select value={selector} onChange={eleccion}>
        <option value="cero">0</option>
        <option value="uno">1</option>
        <option value="dos">2</option>
        <option value="tres">3</option>
      </select>
      <p>La opción seleccionada es {selector}</p>
    </>
  );
}

export default Selector;
