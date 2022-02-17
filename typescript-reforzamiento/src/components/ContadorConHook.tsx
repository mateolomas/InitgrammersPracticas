import { useCounter } from "../hooks/useCounter"
export const ContadorConHook = () => {

  const { contador, suma } = useCounter();


  return (
      <>
    <h1>Contador con hook: <small>{contador}</small> </h1>
    
    <button className="btn btn-primary" onClick={() => suma(-1)}>-1</button>
    <button className="btn btn-primary" onClick={() => suma(1)}>+1</button>
    
    
    </>
  )
}

