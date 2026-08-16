const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async () => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=40`);

  if (!response.ok) {
    throw new Error("포켓몬 목록을 불러오지 못했습니다.");
  }

  const data = await response.json();

  const pokemonList = data.results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      index + 1
    }.png`,
  }));

  return pokemonList;
};
