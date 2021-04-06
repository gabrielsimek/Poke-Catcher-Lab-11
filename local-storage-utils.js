const POKEDEX = 'POKEDEX';

export function getPokeDex(){
    const stringyPokeDex = localStorage.getItem(POKEDEX);
    const parsedPokeDex = JSON.parse(stringyPokeDex);

    if (parsedPokeDex){
        return parsedPokeDex;
    } else {
        return [];
    }
    
}

export function setPokeDex(parsedPokeDex){
    const stringyPokeDex = JSON.stringify(parsedPokeDex);
    localStorage.setItem(POKEDEX, stringyPokeDex);

}