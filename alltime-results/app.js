// import Pokemon from '../poke-data.js';
// import { findByName } from '../utils.js';
// import { getPokeDex } from '../local-storage-utils.js';
// import { getResults } from './results-utils.js';
import { getLocalStorage } from '../local-storage-utils.js';
// import { incrementTotals } from './results-utils.js';
// localStorage.removeItem('POKEDEX');
localStorage.removeItem('POKEDEX');

const allTimeDex = getLocalStorage('ALLTIME');


const pokeName = [];
const caught = [];
const encountered = [];


for (let pokemon of allTimeDex) {
    pokeName.push(pokemon.name);
    caught.push(pokemon.catches);
    encountered.push(pokemon.encounters);
}

var ctx = document.getElementById('myChart').getContext('2d'); 
var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Pokemon encountered',
            data: encountered,
            backgroundColor: [
                'green'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'Pokemon Caught',
            data: caught,
            backgroundColor: [
                'blue'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// name: pokeObj.pokemon,
// encounters: 1,
// catches: 0
// console.log(pokeName, caught, encountered);
// const results = getResults();
// const [caught, encountered, notEncountered, notCaught] = results;


// const caughtEl = document.getElementById('caught');
// caughtEl.textContent = JSON.stringify(caught);

// const encounteredEl = document.getElementById('encountered');
// encounteredEl.textContent = JSON.stringify(encountered);

// const notEncounteredEl = document.getElementById('not-encountered');
// notEncounteredEl.textContent = JSON.stringify(notEncountered);

// const notCaughtEl = document.getElementById('not-caught');
// notCaughtEl.textContent = JSON.stringify(notCaught);

const buttonEl = document.getElementById('play-again');
buttonEl.addEventListener('click', () => {
    
    localStorage.removeItem('POKEDEX');
    window.location = '../index.html';
});
