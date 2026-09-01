import { useEffect, useState } from "react";

import { getPokemonList } from "./api/pokemonApi";

import PokemonList from "./components/PokemonList";
import MyTeam from "./components/MyTeam";
import FavoriteList from "./components/FavoriteList";

import { Page, Container, Title } from "./styles/styled";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemonList();
        setPokemons(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <Page>
      <Container>
        <Title>My Poké Crew</Title>

        <PokemonList pokemons={pokemons} />

        <MyTeam />

        <FavoriteList />
      </Container>
    </Page>
  );
}

export default App;
