
import { useState } from "react";

export const Contador = () => {

  const [contador, setContador] = useState(0);
  const suma = (numero: number) => { 
    setContador(contador + numero);
  }



  return (
      <>
    <h1>Contador</h1>
    
    <button className="btn btn-primary" onClick={() => suma(-1)}>-1</button>
    <button className="btn btn-primary" onClick={() => suma(1)}>+1</button>
    
    <small>{contador}</small>
    </>
  )
}

