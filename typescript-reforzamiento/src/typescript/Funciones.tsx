import React from 'react'

export const Funciones = () => {

    const sumar = (a:number, b: number):Number => {
        return a + b;
    }



  return (
      <>
    <h3>Funciones</h3>
    <span> {sumar(1,2)}</span>
    </>
  )
}
