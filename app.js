// import functions and grab DOM elements
import Pokemon from './poke-data.js';
import { getPokeDex, setPokeDex } from './local-storage-utils.js';
import { catchPokemon, encounterPokemon, findByName, generateAndEncounter, findPokemonByName, caughtPokemon } from './utils.js';


const buttonEl = document.getElementById('button');
const caughtEl = document.getElementById('caught-display');



function startGame(){
    const arrayOfThreePoke = generateAndEncounter();
    const [pokeOne, pokeTwo, PokeThree] = arrayOfThreePoke;
    

  

    const radio1 = document.getElementById('radio-1');
    const radio2 = document.getElementById('radio-2');
    const radio3 = document.getElementById('radio-3');

    radio1.value = pokeOne.pokemon;
    radio2.value = pokeTwo.pokemon;
    radio3.value = PokeThree.pokemon;
    

    const image1 = document.getElementById('img-1');
    const image2 = document.getElementById('img-2');
    const image3 = document.getElementById('img-3');

    image1.src = pokeOne.url_image;
    image2.src = pokeTwo.url_image;
    image3.src = PokeThree.url_image;
    
}
startGame();

let matches = 0;
buttonEl.addEventListener('click', () => {
    matches++;
   
    const selected = document.querySelector('input:checked');

    const selectedPoke = findPokemonByName(selected.value);
    catchPokemon(selectedPoke);
        
    startGame();
    caughtEl.textContent = caughtPokemon();
    if (matches >= 10){
        window.location = 'results/index.html';
    }
        
});



// function renderDom() {
//     for (let n = 1; n < 4; n++){
//         const labelEl = document.createElement('label');
//         labelEl.id = `poke${n}-label`;
//         const inputEl = document.createElement('input');
//         inputEl.name = 'pokemon';
//         inputEl.type = 'radio';
//         inputEl.id = `poke${n}-radio`;
//         const imageEl = document.createElement('img');
//         imageEl.id = `poke${n}-image`;
//         labelEl.append(inputEl, imageEl);
//         el.append(labelEl);
//     }
//     const aDiv = document.createElement('div');
//     const button = document.createElement('button');
//     button.textContent = 'Catch Em!';
//     aDiv.append(button);
//     el.append(aDiv);
    
// }
// renderDom();
