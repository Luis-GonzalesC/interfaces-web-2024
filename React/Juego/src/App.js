import './App.css';
import BtnReiniciar from './Components/BtnReiniciar';
import Adivina from './Components/Adivina';
import Formulario from './Components/Formulario';
import Index from './Components/Textos/index';
import {useState } from 'react';

function App() {

  function generarNumerosSecreto (){
    return Math.trunc(Math.random() * 20) + 1;
  }

  const [numSecreto, setNumSecreto] = useState(generarNumerosSecreto);
  const [mensaje, setMensaje] = useState("Empieza a adivinar...");
  const [puntuacion, setPuntuacion] = useState(20);
  const [puntajeAlto, setPuntajeAlto] = useState(0);

  //Funcion para el boton
  const reiniciar = ()=>{ //Funcion que se le pasa en la etiqueta al boton
    setNumSecreto(generarNumerosSecreto);
    setMensaje("Empieza a adivinar...");
    setPuntuacion(20);
  }

  //Funcion para el formulario
  const comparar = (num)=>{
    if(!num){
      setMensaje("Escribe un número");
    }else{
      if(Number(num) == numSecreto){
        setMensaje("Has Ganado!");
        document.body.style.backgroundColor ="green";
        /*Comparar con el puntaje alto*/
        if(puntuacion > puntajeAlto){
          setPuntajeAlto(puntuacion);
        }
      }else{
        if(puntuacion > 1){
          if(Number(num) > numSecreto){
            setMensaje("Tu número es Alto");
          }else{
            setMensaje("Tu número es bajo");
          }
          setPuntuacion(puntuacion-1);
        }else{
          setMensaje("Has perdido!!");
          document.body.style.backgroundColor ="red";

        }
      }
    }
  }

  return (
  <div className="container">
    <BtnReiniciar reiniciar={reiniciar}/>
    <h1>¡Adivina mi número entre 1 y 20!</h1> {numSecreto}
    <Adivina/>

    <br/>
  
    <Formulario comparar={comparar}/>  
    <Index mensaje = {mensaje} puntuacion = {puntuacion} puntajeAlto = {puntajeAlto}/>
    
  </div>
  );
}

export default App;
