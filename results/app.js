import Pokemon from '../poke-data.js';
import { findByName } from '../utils.js';
import { getPokeDex } from '../local-storage-utils.js';
import { getResults } from './results-utils.js';
const results = getResults();
const [caught, encountered, notEncountered, notCaught] = results;


const caughtEl = document.getElementById('caught');
caughtEl.textContent = JSON.stringify(caught);
const encounteredEl = document.getElementById('encountered');
const notEncounteredEl = document.getElementById('not-encountered');
const notCaughtEl = document.getElementById('not-caught');



console.log(caught, encountered, notEncountered, notCaught);