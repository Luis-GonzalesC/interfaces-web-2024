import React from 'react'

export default function Puntuacion({etiqueta, valor, id}) {//Se recoge por parámetros las etiquetas que le pasamos al llamar al componente
  return (
    <p>{etiqueta} <span id={id}>{valor}</span></p>
  )
}
