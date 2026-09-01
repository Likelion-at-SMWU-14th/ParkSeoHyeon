import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useFavoriteStore = create(
  devtools(
    persist(
      (set) => ({
        favorites: [],

        toggleFavorite: (pokemon) =>
          set(
            (state) => {
              const isFavorite = state.favorites.some(
                (item) => item.id === pokemon.id,
              );

              if (isFavorite) {
                return {
                  favorites: state.favorites.filter(
                    (item) => item.id !== pokemon.id,
                  ),
                };
              }

              return {
                favorites: [...state.favorites, pokemon],
              };
            },
            undefined,
            "favorite/toggleFavorite",
          ),
      }),
      {
        name: "pokemon-favorite-storage",
      },
    ),
    {
      name: "PokemonFavoriteStore",
    },
  ),
);
