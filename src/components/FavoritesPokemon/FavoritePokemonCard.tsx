import type { FavoritePokemon } from "src/interfaces/pokemon";
import FavoriteButton from "@components/common/FavoriteButton";

interface FavoritePokemonCardProps {
  pokemon: FavoritePokemon;
  refreshFavorites: () => void
}

const FavoritePokemonCard = ({ pokemon, refreshFavorites }: FavoritePokemonCardProps) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div className="group relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <a
        href={`/pokemons/${pokemon.name}`}
        className="flex flex-col justify-center items-center rounded-xl border-2 p-2"
      >
        <img
          className="h-28"
          src={imgSrc}
          alt={`${pokemon.name}-img`}
          style={{ viewTransitionName: `${pokemon.name}-img` }}
        />
        <span className="capitalize">{pokemon.name}</span>
      </a>
      <div className="absolute top-2.5 right-0 mr-3">
        <FavoriteButton pokemon={pokemon} refreshFavorites={refreshFavorites} size={18} />
      </div>
    </div>
  );
};

export default FavoritePokemonCard;
