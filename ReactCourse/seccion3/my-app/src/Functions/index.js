
function not_saludar(nombre) {
    return `Hola ${nombre}`;
}



const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => 
    `Hola ${nombre}`;


console.log(saludar2('Gohan'));

const getUser = () => ({ uid: 'ABC123', username: 'El_102' });

const getUsuarioActivo = (nombre) => ({ uid: 'ABC123', username: nombre });
