## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


### Goal:
    Render 3 unique pokemon, allow the user to select one and press a button to caputure it. Keep track of which pokemon will be scene and which have been captured
    Info for pokemon will be an array of objects kept in a data file
    The pokemon that have been caught and seen will be stored in an array in localStorage
## State
    1) How many pokemon have been caught
    2) How many pokemon have been seen
    3) How many sessions have been played
    PokeDex array will include:
```JS
    name: pokemon.pokemon,
    seen: 0,
    caught: 0
 //seen will always start at one for each initially loaded pokemon
```
## HTML
Will need `<input>` nested inside `<label>`
We will change the values for these on click, updating value and src
```HTML
<input type ="radio" name="pokemon" value="pokemon.name">
<img src="pokemon.url">
```
`button`  Stuff happens on click

## Logic
generate three random pokemon `generateThreeRandomPokemon();`
On initial page load want 3 pokemon rendered into the HTML inputs (function dom render) 
Will need to store state in localStore (get, set functions) will be in a array called pokeDex
Will require the data be taken from the array of objects
    will change the value and url of the three inputs
    Every time that three new pokemon are loaded we want to increment their seen property. (function)
    onClick:
        `getElementById` for all unique inputs
        based on currently selected input `querySelector('input:checked')` match the value of this pokemon to the corresponding value in the data array `pokemon.pokemon`
        increment the caught for this pokemon (function)
        render a new set of three pokemon 


### Functions
should encounter everytime 3 new pokemon are created, and set them into pokeDex
 GenerateThreePokemon
    Should create 3 random numbers based on the length of the Poke data array
`function getRandomNums()`
3x `Math.floor(Math.random() * pokeData.length)` save to 3 dif variables declared using `let` they will change if not unique
Make sure we don't get the same random numbers use a while loop
when finished return the three numbers and extract pokemon from the array by subbing the numbers to the pokeData
return as an array
 ```JS
    while (num1 === num2 || num2 === num3 || num1 === num3) {
        3x let num = getRandomNum();

    }

    3x const poke1 = pokeDataArray[num];
    
    const threePokemon = [poke1, poke2, poke3]
    return threePokemon;
    //should encounter everytime they are generated
    3x encounterPoke(poke1)
 ```
function to increment "seen" state: will need to a pokemon (entire pokeOBject)
```JS
    function encounterPoke(pokemon){
        const pokeDex = getPokeDex();
        // find a matching pokemon
        //this function will be run three times when generate the pokemon
        const encounteredPokemon = findByID(pokemon.name, pokedex )
        if (encounteredPokemon) {
            encounteredPokemon.encountered ++
        } else {
            const newPokeDexpoke = {
                name: pokemon.name
                encountered: 1
                caught: 0
            }
            pokeDex.push(nePokeDexPoke)
        }
            setPokeDex(pokeDex)
    }

```


Function to increment cuaght state: should be similar to the encounterFunction but not return new items (all items already added to pokeDex when created) will happen on click
```JS
function catchPokemon(pokemon) {
    const pokeDex = getPokeDex()
    const caughtPokemon findById(pokemon.name, pokeDex)

    caughtPokemon.caught++
}

```





    getElementById(arrayOfPoke, pokemon.pokemon)??
    getPokeDex 
        check if it exists otherwise return an empty array
        parse and return pokeDex from localStorage
    setPokeDex 
        take in the JS array of the pokeDex
        should stringifyit and set it in localStorage
 `localStorage.setItem('POKEDEX', strinfifiedArray)`

 

    

