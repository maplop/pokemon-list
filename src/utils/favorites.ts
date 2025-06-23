import type { FavoritePokemon } from "src/interfaces/pokemon";

export const getFavorites = (): FavoritePokemon[] =>
  JSON.parse(localStorage.getItem("favorites") ?? "[]");

export const saveFavorites = (favorites: FavoritePokemon[]) =>
  localStorage.setItem("favorites", JSON.stringify(favorites));

export const isFavorite = (name: string): boolean =>
  getFavorites().some((p) => p.name === name);

export const addFavorite = (pokemon: FavoritePokemon): void => {
  if (!isFavorite(pokemon.name)) {
    const favorites = getFavorites();
    favorites.push(pokemon);
    saveFavorites(favorites);
  }
};

export const removeFavorite = (name: string): void => {
  const newFavorites = getFavorites().filter((p) => p.name !== name);
  saveFavorites(newFavorites);
};
