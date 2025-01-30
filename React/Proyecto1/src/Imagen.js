import './Imagen.css';
import imagen1 from './imagenes/kakashi.jpg';
import imagen2 from './imagenes/Escanor.jpg';

import { useRef, useState} from 'react';

function Imagen() {

    function cambiarImagen(ev){
        console.log(imagen1);
        
        
    }

  return (
    <>
        <img className='imagen' src={imagen1} alt="Esto es una imagen" onClick={cambiarImagen}/>
        <img className='imagen' src={imagen2} alt="Esto es una imagen" onClick={cambiarImagen}/>
    </>
  );
}

export default Imagen;