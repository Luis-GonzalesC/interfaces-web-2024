import React from 'react'

export default function Titulo({mensaje, precio}) {
  return (
    <div>
      <h1>Cenar con {mensaje} vale {precio} €</h1>
    </div>
  )
}
