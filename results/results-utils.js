// import Pokemon from '../poke-data.js';
// import { encounterPokemon, findByName } from '../utils.js';
import { getPokeDex } from '../local-storage-utils.js';
export function getResults(){
    const pokeDex = getPokeDex();
    const caughtPoke = [];
    for (let poke of pokeDex){
        if (poke.catches > 0){
            caughtPoke.push(poke);
        }
    }
   
    const encounteredPoke = [];
    for (let poke of pokeDex) {
        if (poke.encounters > 0){
            encounteredPoke.push(poke);
        }
    }

    const notEncountered = [];
    for (let poke of pokeDex) {
        if (poke.encounters <= 0){
            notEncountered.push(poke);
        } 
    }

    const notCaught = [];
    for (let poke of pokeDex) {
        if (poke.catches <= 0){
            notCaught.push(poke);
        }
    }

    const results = [];
    results.push(caughtPoke, encounteredPoke, notEncountered, notCaught);
    return results;
}
