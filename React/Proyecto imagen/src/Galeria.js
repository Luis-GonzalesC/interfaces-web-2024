import './Imagen.css';
import imagen1 from "./imagenes/Escanor.jpg";
import imagen2 from "./imagenes/kakashi.jpg";

import {useState} from 'react';

function Imagen() {
  const [src, setSrc] = useState(imagen1);

  const cambiarImagen = () =>{
    setSrc(imagen2);
  }

  return (
    <>
      <img src={src} onClick={cambiarImagen}/>
    </>
  );
}

export default Imagen;