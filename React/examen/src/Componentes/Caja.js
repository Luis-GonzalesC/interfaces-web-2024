import React, { useRef, useState } from 'react';
import './Caja.css';

export default function Caja({parametro, cena}) {
    const cajaFamoso = useRef();
    const [color, setColor] = useState(parametro.color);

    const pormedio = ()=>{
        cena(parametro.nombre, parametro.apellido, parametro.precio);
        cajaFamoso.current.style.display = "none";
    }
  return (
    <div className="padre">  
        <div className="caja" ref={cajaFamoso} style={{backgroundColor:color}}>
            {parametro.nombre} {parametro.apellido}
            <br/>
            <input type='button' value={"Seleccionar"} onClick={pormedio}/>
        </div>
    </div>
  )
}
