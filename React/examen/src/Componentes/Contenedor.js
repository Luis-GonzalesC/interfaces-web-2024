import Caja from './Caja';

export default function Contenedor({funcion}) {

    let famosos = [
        {nombre: "Pablo", apellido: "Alboran", color: "red", precio: 100},
        {nombre: "Aitana", apellido: "", color: "purple", precio: 120},
        {nombre: "Abraham", apellido: "Mateo", color: "blue", precio: 140},
        {nombre: "Ana", apellido: "Mena", color: "violet", precio: 150},
        {nombre: "Manuel", apellido: "Carrasco", color: "green", precio: 125},
        {nombre: "Rosalia", apellido: "", color: "orange", precio: 180},
    ];

  return (
    <div>
        <Caja parametro={famosos[0]} cena={funcion}/>
        <Caja parametro={famosos[1]} cena={funcion}/>
        <Caja parametro={famosos[2]} cena={funcion}/>
        <Caja parametro={famosos[3]} cena={funcion}/>
        <Caja parametro={famosos[4]} cena={funcion}/>
        <Caja parametro={famosos[5]} cena={funcion}/>

    </div>
  )
}
