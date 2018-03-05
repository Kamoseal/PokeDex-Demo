$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1/`   
}).done(dataPokemon);

// Esta informacion la arroja a la funcion data Pokemon
function dataPokemon (data){
    //Ingresamos a la data en subrama Pokemon_entries
    const pokemonEntries = data.pokemon_entries;
    //console.log(pokemonEntries);
    //Recorremos los 721 Pokemon

    let output = ``; 

    pokemonEntries.forEach(function(arraypokemonEntries) { 
        //Arroja la informacion de cada pokemon URL
       const pokemonUrl = arraypokemonEntries.pokemon_species.url;
       //Devuelve todos los nombres de los pokemon
       const pokemonName = arraypokemonEntries.pokemon_species.name;
         
        output += `<div class="left"> <img src="${"https://dummyimage.com/300.png/09f/fff"}" alt="Pokemon"><p class="text-center">${pokemonName}</p><p><a href="${pokemonUrl}">${pokemonUrl}</a></p></div>`;

        $("#container").html(output);
        console.log(pokemonUrl); 
    });
    
    
    



    //console.log("the ajax request has finished!");
    console.log();
}




