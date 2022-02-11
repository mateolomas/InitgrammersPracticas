
const personajesDBZ = ['Goku', 'Krilin', 'Bulma'];

const [,,p2] = personajesDBZ;

console.log(p2)

const retornaArreglo = () => {
    return ['ABC123', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const uState = (valor) => {
    return [valor, () => {console.log("Hola")}];

}

const [nombre, sNombre] = uState('Goku');

sNombre();