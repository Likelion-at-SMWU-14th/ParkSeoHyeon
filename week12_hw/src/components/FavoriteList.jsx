import { useFavoriteStore } from "../store/useFavoriteStore";

import {
  Section,
  SectionTitle,
  PokemonGrid,
  PokemonCardBox,
  PokemonImage,
  PokemonName,
  RemoveButton,
  EmptyMessage,
} from "../styles/styled";

function FavoriteList() {
  const favorites = useFavoriteStore((state) => state.favorites);

  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  return (
    <Section>
      <SectionTitle>Favorites ({favorites.length})</SectionTitle>

      {favorites.length === 0 ? (
        <EmptyMessage>아직 즐겨찾기한 포켓몬이 없습니다.</EmptyMessage>
      ) : (
        <PokemonGrid>
          {favorites.map((pokemon) => (
            <PokemonCardBox key={pokemon.id}>
              <PokemonImage src={pokemon.image} alt={pokemon.name} />

              <PokemonName>{pokemon.name}</PokemonName>

              <RemoveButton onClick={() => toggleFavorite(pokemon)}>
                즐겨찾기 해제
              </RemoveButton>
            </PokemonCardBox>
          ))}
        </PokemonGrid>
      )}
    </Section>
  );
}

export default FavoriteList;
