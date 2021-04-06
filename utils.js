import Pokemon from './poke-data.js';
import { getPokeDex, setPokeDex } from './local-storage-utils.js';

export function findById(array, id) {
    for (let item of array){
        if (item.id === id){
            return item;
        }
    }
    return null;
}

// export function findPokemonByName(name){
//     for (let poke of Pokemon) {
//         if (poke.pokemon === name) {
//             return poke;
//         }
       
//     }
    
// }

function getRandomNumber(){
    const randomNum = Math.floor(Math.random() * Pokemon.length);
    return randomNum;

}


export function generateThreePokemon(){
    let indexOne = getRandomNumber();
    let indexTwo = getRandomNumber();
    let indexThree = getRandomNumber();

    while (indexOne === indexTwo || indexTwo === indexThree || indexOne === indexThree){
        indexOne = getRandomNumber();
        indexTwo = getRandomNumber();
        indexThree = getRandomNumber();
    }

    const pokeOne = Pokemon[indexOne];
    const pokeTwo = Pokemon[indexTwo];
    const pokeThree = Pokemon[indexThree];

    const threeNewPokemon = [pokeOne, pokeTwo, pokeThree];
    
    return threeNewPokemon;

}
// encounter poke will be first thing to set local storage?
export function encounterPokemon(pokeObj) {
    const pokeDex = getPokeDex();
    
    // const matchingPoke = findPokemonByName(pokeObj.pokemon);
    const matchingPoke = findById(pokeDex, pokeObj.pokemon);
    console.log(matchingPoke);
    //use id!
    if (matchingPoke) {
        matchingPoke.encounters++;
    } else {
        const newPokeDexPoke = {
            id: pokeObj.pokemon,
            encounters: 1,
            catches: 0
        };
        pokeDex.push(newPokeDexPoke);
    }

    setPokeDex(pokeDex);

    return pokeDex;
}

export function catchPokemon(pokeObj) {
    const pokeDex = getPokeDex();
    const matchingPoke = findById(pokeDex, pokeObj.pokemon);
    matchingPoke.catches++;

    setPokeDex(pokeDex);
    return pokeDex;

}