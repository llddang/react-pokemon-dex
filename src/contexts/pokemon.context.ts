import { PokemonsAction } from "@/contexts/pokemon.reducer";
import { Pokemon } from "@/types/pokemon.dto";
import { createContext } from "react";

export const PokemonsContext = createContext<Pokemon[]>([]);
export const PokemonsDispatchContext = createContext<
  React.Dispatch<PokemonsAction>
>(() => {});
