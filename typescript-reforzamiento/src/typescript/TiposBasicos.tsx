import React from 'react'

const TiposBasicos = () => {


 const nombre: string = 'Juan';
 const edad: number = 30;
 const casado: boolean = false;
 

const poderes: string[] = ['Volar', 'Rayos X', 'Super Fuerza'];


  return (
      <>
    <h2>Tipos Basicos</h2>
    { nombre },
    { edad },
    { casado  ? 'Si' : 'No' },
    { poderes.join(" ") }
    </>
  )
}

export default TiposBasicos