
import { useState } from "react";

export const useCounter = (inicial: number = 11) => {

const [contador, setContador] = useState(100);
  const suma = (numero: number) => { 
    setContador(contador + numero);
  }

  return {
      contador, 
        suma
  }

}
