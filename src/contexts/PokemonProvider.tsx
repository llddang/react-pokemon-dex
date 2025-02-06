import {
  PokemonsContext,
  PokemonsDispatchContext,
} from "@/contexts/pokemon.context";
import pokemonReducer from "@/contexts/pokemon.reducer";
import { useReducer } from "react";

export default function PokemonProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [pokemons, dispatch] = useReducer(pokemonReducer, []);

  return (
    <PokemonsContext.Provider value={pokemons}>
      <PokemonsDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonsDispatchContext.Provider>
    </PokemonsContext.Provider>
  );
}
