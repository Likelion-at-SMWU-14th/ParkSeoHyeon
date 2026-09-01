import PokemonCard from "./PokemonCard";

import { Section, SectionTitle, PokemonGrid } from "../styles/styled";

function PokemonList({ pokemons }) {
  return (
    <Section>
      <SectionTitle>Pokémon List</SectionTitle>

      <PokemonGrid>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonGrid>
    </Section>
  );
}

export default PokemonList;
