
interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    direccion: Direccion;
    
}



const ObjetosLiterales = () => {

 const persona: Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso'
    }

 }

  return (
    <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
            {
                JSON.stringify(persona, null, 2)
            }
        </pre>

    </code>
    </>
  )
}



export default ObjetosLiterales