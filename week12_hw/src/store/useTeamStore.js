import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useTeamStore = create(
  devtools(
    persist(
      (set) => ({
        team: [],

        addPokemon: (pokemon) =>
          set(
            (state) => {
              const isAlreadyAdded = state.team.some(
                (item) => item.id === pokemon.id,
              );

              if (isAlreadyAdded) {
                return state;
              }

              if (state.team.length >= 6) {
                return state;
              }

              return {
                team: [...state.team, pokemon],
              };
            },
            undefined,
            "team/addPokemon",
          ),

        removePokemon: (id) =>
          set(
            (state) => ({
              team: state.team.filter((pokemon) => pokemon.id !== id),
            }),
            undefined,
            "team/removePokemon",
          ),
      }),
      {
        name: "pokemon-team-storage",
      },
    ),
    {
      name: "PokemonTeamStore",
    },
  ),
);
