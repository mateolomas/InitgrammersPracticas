
const persona = {
    nombre: 'Juan',
    edad: 20,
    clave : '123',
}

const {nombre, edad, clave} = persona;

console.log(nombre, edad, clave)

const returnPerson = ({edad}) => {
    console.log(edad);
}

returnPerson(persona);



const Context1 = ({clave, nombre, edad, rango = 'jsa'}) => {
    return {
        nombreClave: clave, 
        anios: edad,
        latlng: {lat: 14.1232, lng: -12.1232}
    }

}

const {nombreClave, anios, latlng: {lat, lng}} = Context1(persona);

console.log(nombreClave, anios);
console.log(lat, lng)
