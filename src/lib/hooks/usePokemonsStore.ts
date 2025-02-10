import { MAX_POKEMON_COUNT } from "@/constants";
import { POKEMON_DATA } from "@/mocks";
import { addPokemon, deletePokemon } from "@/store/pokemons.slice";
import { RootState } from "@/store/redux";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function usePokemonsStore() {
  const chosePokemons = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch();

  function handlePokemonStoreAction(pokemonId: number) {
    const pokemon = POKEMON_DATA.find((p) => p.id === pokemonId);
    if (!pokemon) return;

    const isChose = chosePokemons.some((cp) => cp.id === pokemon.id);
    if (isChose) {
      dispatch(deletePokemon(pokemon.id));
      return toast.info(`${pokemon.name} 아(야), 잘 가!`);
    }
    if (chosePokemons.length >= MAX_POKEMON_COUNT)
      return toast.error("더 이상 선택할 수 없습니다.");
    dispatch(addPokemon(pokemon));
    return toast.info(`와! ${pokemon.name} 을(를) 포획했다!`);
  }

  function isChose(pokemonId: number) {
    return chosePokemons.some((cp) => cp.id === pokemonId);
  }

  return { chosePokemons, handlePokemonStoreAction, isChose };
}
