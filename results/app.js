import Pokemon from '../poke-data.js';
import { findByName } from '../utils.js';
import { getPokeDex } from '../local-storage-utils.js';
import { getResults } from './results-utils.js';
const results = getResults();
const [caught, encountered, notEncountered, notCaught] = results;
const buttonEl = document.getElementById('play-again')

const caughtEl = document.getElementById('caught');
caughtEl.textContent = JSON.stringify(caught);

const encounteredEl = document.getElementById('encountered');
encounteredEl.textContent = JSON.stringify(encountered);

const notEncounteredEl = document.getElementById('not-encountered');
notEncounteredEl.textContent = JSON.stringify(notEncountered);

const notCaughtEl = document.getElementById('not-caught');
notCaughtEl.textContent = JSON.stringify(notCaught);


buttonEl.addEventListener('click', () => {
    localStorage.removeItem('POKEDEX');
    window.location = '/';
});
