$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1/`   
}).done(dataPokemon);

// Esta informacion la arroja a la funcion data Pokemon
function dataPokemon (data){
    const pokemonEntries = data.pokemon_entries;
    console.log(pokemonEntries);
    pokemonEntries.forEach(function(arraypokemonEntries) {
       

        console.log(arraypokemonEntries);
        
    });
    let output = ``;



    //console.log("the ajax request has finished!");
    console.log();
}




