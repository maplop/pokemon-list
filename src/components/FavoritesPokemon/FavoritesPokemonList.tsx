import { useState, useEffect } from "react";
import type { Pokemon } from "src/interfaces/pokemon";

const PokemonList = () => {
  const getLocalStoragePokemons = (): Pokemon[] => {
    const raw = localStorage.getItem("favorites");
    return raw ? JSON.parse(raw) : [];
  };

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const data = getLocalStoragePokemons();
    setPokemons(data);
  }, []);

  return (
    <section
      aria-label="Listado de Pokémons"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4"
    >
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>

        </div>
      ))}
    </section>
  );
};

export default PokemonList;
