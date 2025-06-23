import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { isFavorite, addFavorite, removeFavorite, } from "@utils/favorites";
import type { FavoritePokemon } from "src/interfaces/pokemon";

interface FavoriteButtonProps {
  pokemon: FavoritePokemon;
  refreshFavorites?: () => void
  size?: number,
}

const FavoriteButton = ({ pokemon, refreshFavorites, size = 28, }: FavoriteButtonProps) => {

  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    setFavorite(isFavorite(pokemon.name));
  }, [pokemon.name]);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(pokemon.name)
      setFavorite(false)

    } else {
      addFavorite(pokemon)
      setFavorite(true)
    }
    refreshFavorites?.()
  }

  return (
    <button
      className="text-3xl cursor-pointer"
      onClick={toggleFavorite}
    >
      {favorite ? (
        <FaHeart className="text-red-600" size={size} />
      ) : (
        <FaRegHeart className="text-red-600" size={size} />
      )}
    </button>
  )
}
export default FavoriteButton

