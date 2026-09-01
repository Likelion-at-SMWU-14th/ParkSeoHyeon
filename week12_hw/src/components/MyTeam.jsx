import { useTeamStore } from "../store/useTeamStore";

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

function MyTeam() {
  const team = useTeamStore((state) => state.team);

  const removePokemon = useTeamStore((state) => state.removePokemon);

  return (
    <Section>
      <SectionTitle>My Team ({team.length}/6)</SectionTitle>

      {team.length === 0 ? (
        <EmptyMessage>아직 팀에 추가된 포켓몬이 없습니다.</EmptyMessage>
      ) : (
        <PokemonGrid>
          {team.map((pokemon) => (
            <PokemonCardBox key={pokemon.id}>
              <PokemonImage src={pokemon.image} alt={pokemon.name} />

              <PokemonName>{pokemon.name}</PokemonName>

              <RemoveButton onClick={() => removePokemon(pokemon.id)}>
                팀에서 삭제
              </RemoveButton>
            </PokemonCardBox>
          ))}
        </PokemonGrid>
      )}
    </Section>
  );
}

export default MyTeam;
