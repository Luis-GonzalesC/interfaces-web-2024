import { useState } from 'react';
import './App.css';
import Contenedor from './Componentes/Contenedor';
import Titulo from './Componentes/Titulo';

function App() {
  const [mensaje, setMensaje] = useState("nadie");
  const [precio, setPrecio] = useState(0);

  const [tmp_nombre, setTmpNombre] = useState("");
  const [tmp_precio, setTmpPrecio] = useState(0);

  const cenaFamoso = (nombre, apellido, precio)=>{
    setTmpNombre(tmp_nombre + `${nombre} ${apellido}, `);//Guardo el nombre en una variable temporal
    setTmpPrecio(tmp_precio + precio); //Guardo el precio en una variable temporal
    //Cambio el titulo de acuerdo a lo que pulsa
    setMensaje(tmp_nombre + `${nombre} ${apellido}`);//Nombre anterior más el nuebo
    setPrecio(tmp_precio);
  }

  return (
    <div>
      <Titulo mensaje={mensaje} precio = {precio}/>
      <Contenedor funcion={cenaFamoso}/>
    </div>
  );
}

export default App;
