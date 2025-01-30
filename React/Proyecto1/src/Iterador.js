import './Iterador.css';
import { useRef, useState} from 'react';

function Iterador() {

  const cajaIterador = useRef();//Se pone esto para poder hacer la referencia al elemento a cambiar

  const [inicio, setInicio] = useState()

  //Arriba siempre las funciones
  const sumar1 = (e)=>{
    if(e.target.innerHTML < 9){
      e.target.innerHTML++;
      if(e.target.innerHTML == 8){
        e.target.style.backgroundColor = "red";
      }
    }else{
      e.target.innerHTML = 1;
      e.target.style.backgroundColor = "white";
    }
  }

  //Funcion con el boton de resetar a 1
  const iniciar = ()=>{
    //use de react hace referencia a un objeto, así podemos acceder
    cajaIterador.current.innerHTML = 1;
  }

  //Funcion que pone el numero del input en el div
  const iniciarnumero = (e)=>{
    cajaIterador.current.innerHTML = e.target.value;
    
  }

  return (
    <>
      <div ref={cajaIterador} className="iterador" onClick={sumar1}>
        1
      </div>
      <button onClick={iniciar}>Resetar</button>
      <br/>
      Iniciar el iterador con 
      <input value={inicio} type='number' onChange={iniciarnumero}/>
      <br/>
    </>
  );
}

export default Iterador;