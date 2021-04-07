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

export function getLocalStorage(key){
    const stringyData = localStorage.getItem(key);
    const parsedData = JSON.parse(stringyData);

    if (parsedData){
        return parsedData;
    } else {
        return [];
    }
    
}

export function setLocalStorage(key, parsedArray){
    const stringyArray = JSON.stringify(parsedArray);
    localStorage.setItem(key, stringyArray);

}