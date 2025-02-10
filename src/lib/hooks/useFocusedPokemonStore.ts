import { POKEMON_DATA } from "@/mocks";
import { updatePokemon } from "@/store/focusedPokemon.slice";
import { RootState } from "@/store/redux";
import { useDispatch, useSelector } from "react-redux";

export default function useFocusedPokemonStore() {
  const focusedPokemon = useSelector(
    (state: RootState) => state.focusedPokemon
  );
  const dispatch = useDispatch();
  console.log(focusedPokemon.id, focusedPokemon.name);

  function updateFocusedPokemon(pokemonId: number) {
    const pokemon = POKEMON_DATA.find((p) => p.id === pokemonId);
    if (!pokemon) return;

    dispatch(updatePokemon(pokemon));
  }

  return { focusedPokemon, updateFocusedPokemon };
}
