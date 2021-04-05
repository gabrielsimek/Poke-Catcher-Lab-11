import Pokemon from './poke-data.js';

function getRandomNumber(){
    const randomNum = Math.floor(Math.random() * Pokemon.length);
    return randomNum;

}


export function generateThreePokemon(){
    let indexOne = getRandomNumber();
    let indexTwo = getRandomNumber();
    let indexThree = getRandomNumber();

    const pokeOne = Pokemon[indexOne];
    const pokeTwo = Pokemon[indexTwo];
    const pokeThree = Pokemon[indexThree];

    const threeNewPokemon = [pokeOne, pokeTwo, pokeThree];
    console.log(threeNewPokemon);

}
