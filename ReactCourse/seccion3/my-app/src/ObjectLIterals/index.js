
const persona = {
    nombre: 'Juan',
    edad: 20,
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso'

    }

}

const persona2 = {
    ...persona
}
persona2.nombre = 'Pedro'

console.log(persona);
console.log(persona2);