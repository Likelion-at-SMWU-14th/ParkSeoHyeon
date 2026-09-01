import { useTeamStore } from "../store/useTeamStore";
import { useFavoriteStore } from "../store/useFavoriteStore";

import {
  PokemonCardBox,
  PokemonImage,
  PokemonName,
  ButtonGroup,
  AddButton,
  FavoriteButton,
} from "../styles/styled";

function PokemonCard({ pokemon }) {
  const addPokemon = useTeamStore((state) => state.addPokemon);

  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((item) => item.id === pokemon.id);

  return (
    <PokemonCardBox>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />

      <PokemonName>{pokemon.name}</PokemonName>

      <ButtonGroup>
        <AddButton onClick={() => addPokemon(pokemon)}>팀에 추가</AddButton>

        <FavoriteButton onClick={() => toggleFavorite(pokemon)}>
          {isFavorite ? "❤️" : "🤍"}
        </FavoriteButton>
      </ButtonGroup>
    </PokemonCardBox>
  );
}

export default PokemonCard;
