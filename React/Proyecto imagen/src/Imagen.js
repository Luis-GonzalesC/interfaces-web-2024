import './Imagen.css';
import imagen1 from "./imagenes/Escanor.jpg";
import imagen2 from "./imagenes/kakashi.jpg";

import { useRef, useState} from 'react';

function Imagen() {
  const cajaIterador = useRef();//Se pone esto para poder hacer la referencia al elemento a cambiar

  const cambiarImagen = () =>{
    console.log("a");
  }

  return (
    <>
      <img src={imagen1} onClick={cambiarImagen}/> <br/>
      <input type='text'/>
    </>
  );
}

export default Imagen;