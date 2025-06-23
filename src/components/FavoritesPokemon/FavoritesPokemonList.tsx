import { useEffect, useState } from "react";
import type { FavoritePokemon } from "src/interfaces/pokemon";
import { getFavorites } from "@utils/favorites";
import FavoriteButton from "@components/common/FavoriteButton";
import FavoritePokemonCard from "./FavoritePokemonCard";

const FavoritesPokemonList = () => {

  const [favorites, setFavorites] = useState<FavoritePokemon[]>(getFavorites());

  const refreshFavorites = () => {
    setFavorites(getFavorites());
  };

  return (
    <div>
      {favorites.length > 0 ? (
        <section
          aria-label="Listado de Pokémons"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4"
        >
          {favorites.map((pokemon) => (
            <div key={pokemon.id}>
              <FavoritePokemonCard pokemon={pokemon} refreshFavorites={refreshFavorites} />
            </div>
          ))}
        </section>
      ) : (
        <div className="flex justify-center items-center h-[200px] mt-4">
          <span className="text-xl text-center text-white/60">
            No tienes pokemons en tu lista de favoritos 😞
          </span>
        </div>
      )}
    </div>
  );
};

export default FavoritesPokemonList;
