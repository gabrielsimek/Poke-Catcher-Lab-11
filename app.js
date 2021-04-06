// import functions and grab DOM elements
import Pokemon from './poke-data.js';
import { getPokeDex, setPokeDex } from './local-storage-utils.js';
import { catchPokemon, encounterPokemon, findById } from './utils.js';
// import { generateThreePokemon } from './utils.js';


    // console.log(aPokemon.pokemon);
    // encounterPokemon(aPokemon);
//charmeleon ^^


// initialize state

// set event listeners to update state and DOM
const aPoke = Pokemon[0];
encounterPokemon(aPoke);
catchPokemon(aPoke);