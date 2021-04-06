import Pokemon from './poke-data.js';
import { getPokeDex, setPokeDex } from './local-storage-utils.js';
//name not ID!!!!
export function findByName(array, name) {
    for (let item of array){
        if (item.name === name){
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

export function initializeGame() {
    const pokeArray = generateThreePokemon();
    const pokeOne = pokeArray[0];
    const pokeTwo = pokeArray[1];
    const pokeThree = pokeArray[2];
    encounterPokemon(pokeOne);
    encounterPokemon(pokeTwo);
    encounterPokemon(pokeThree);
    console.log(pokeOne, pokeTwo, pokeThree);
}
// encounter poke will be first thing to set local storage?
export function encounterPokemon(pokeObj) {
    const pokeDex = getPokeDex();
    
    // const matchingPoke = findPokemonByName(pokeObj.pokemon);
    const matchingPoke = findByName(pokeDex, pokeObj.pokemon);
    
   
    if (matchingPoke) {
        matchingPoke.encounters++;
    } else {
        const newPokeDexPoke = {
            name: pokeObj.pokemon,
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
    const matchingPoke = findByName(pokeDex, pokeObj.pokemon);
    matchingPoke.catches++;

    setPokeDex(pokeDex);
    return pokeDex;

}