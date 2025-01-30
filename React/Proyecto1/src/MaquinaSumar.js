import { useRef, useState} from 'react';

function MaquinaSumar() {

    const num1 = useRef();//Se pone esto para poder hacer la referencia al elemento a cambiar
    const num2 = useRef();//Se pone esto para poder hacer la referencia al elemento a cambiar
    const [sumar, setSumar] = useState('');
    
    const sumatoria = ()=>{
        //setSumar(num1.value + num2.value);
        setSumar(num1.current.valueAsNumber + num2.current.valueAsNumber); 
    }


  return (
    <>
      <input ref={num1} type='number'/> +
      <input ref={num2} type='number'/> = 
      <input readOnly value={sumar} type='number'/>
      <button onClick={sumatoria}>Sumar</button>
    </>
  );
}

export default MaquinaSumar;
