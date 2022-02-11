
import  heroes  from "./data/hero";

console.log(heroes);

const getUserbyId = (id) => heroes.find(hero => hero.id === id);


console.log(getUserbyId(2));

const getHeroesByOwner = (owner) => heroes.filter(hero => hero.owner === owner);

console.log(getHeroesByOwner('DC'));