import React from 'react';
import { useRef } from 'react';

export default function Texto() {

    const cajaInput = useRef();//Se pone esto para poder hacer la referencia al elemento a cambiar

    const desaparecer = ()=>{
        
    }

  return (
    <div>
        <input ref={cajaInput} onClick={desaparecer} type='text'/>
    </div>
  )
}
