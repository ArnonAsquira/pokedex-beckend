const searchButton = document.getElementById('search-poke-button');

searchButton.addEventListener('click', searchPokemon);

async function searchPokemon(e) {
   const pokeName = document.getElementById('search-pokemon-by-name').value;
   if(Number(pokeName)) {
    const response = await axios.get(`http://localhost:3000/pokemon/get/${pokeName}`);
   } else {
    const response = await axios.get(`http://localhost:3000/pokemon/query`, {params: {query: pokeName}});
   }
   console.log(response);
}