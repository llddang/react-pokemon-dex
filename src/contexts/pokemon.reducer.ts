import { Pokemon } from "@/types/pokemon.dto";

export type PokemonsAction =
  | { type: "ADD"; pokemon: Pokemon }
  | { type: "DELETE"; id: number };

export default function pokemonReducer(
  pokemons: Pokemon[],
  action: PokemonsAction
) {
  switch (action.type) {
    case "ADD":
      return [...pokemons, action.pokemon];
    case "DELETE":
      return pokemons.filter((p) => p.id !== action.id);
    default:
      throw Error("Unknown action");
  }
}
