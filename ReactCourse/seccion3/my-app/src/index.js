
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];




const getUserbyId = (id) => heroes.find(hero => hero.id === id);

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getUserbyId(-1);
        resolve(heroe);
    }, 2000)

});

promesa.then((heroe) => {
    console.log("Then de la promesa");
}).catch((error) => {
    console.log("Error de la promesa");
});

 */

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getUserbyId(id);
            if(heroe)
                resolve(heroe);
            else 
                reject(`No se encontro el heroe con id ${id}`);
        }, 2000)
    });

    

}

getHeroeByIdAsync(4)
.then(console.log)
.catch(console.warn);

