import React, { SetStateAction, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonListS from "@/components/features/pokemon/PokemonList.styled";
import PokemonCard from "@/components/features/pokemon/PokemonCard";
import { useGridColumnCount } from "@/lib/hooks/useGridColumCount";
import { addPokemon, deletePokemon } from "@/store/pokemons.slice";
import { RootState } from "@/store/redux";
import { MAX_POKEMON_COUNT } from "@/constants";
import { POKEMON_DATA } from "@/mocks";

import { createExecuteKeyAction, getKeyMapping } from "@/types/keyAction.type";

export interface PokemonListProps {
  focusedId: number;
  setFocusedId: React.Dispatch<SetStateAction<number>>;
}

export default function PokemonList({
  focusedId,
  setFocusedId,
}: PokemonListProps) {
  const { gridRef, columnCount } = useGridColumnCount();
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const chosePokemons = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch();

  const pokemonsWithSelect = POKEMON_DATA.map((p) =>
    chosePokemons.some((cp) => cp.id === p.id)
      ? { ...p, isChose: true }
      : { ...p, isChose: false }
  );
  const maxId = pokemonsWithSelect.at(-1)?.id || 0;

  const executeKeyAction = createExecuteKeyAction(
    maxId,
    columnCount,
    setFocusedId,
    handleEnterAction
  );

  function handleArrowKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const actionKey = getKeyMapping(e.key);
    if (!actionKey) return;
    executeKeyAction(actionKey);
  }

  function handleEnterAction() {
    const focusedPokemon = pokemonsWithSelect.find((p) => p.id === focusedId);
    if (!focusedPokemon) return;

    if (focusedPokemon.isChose)
      return dispatch(deletePokemon(focusedPokemon.id));
    if (chosePokemons.length >= MAX_POKEMON_COUNT)
      return alert("더 이상 선택할 수 없습니다.");
    return dispatch(addPokemon(focusedPokemon));
  }

  function handleCardClick(e: React.MouseEvent<HTMLDivElement>) {
    const card = (e.target as HTMLElement).closest('[id^="pokemon-card-"]');
    if (!card) return;

    const pokemonId = Number(card.id.split("-").at(-1));
    setFocusedId(pokemonId);
  }

  useEffect(() => {
    if (innerContainerRef.current) innerContainerRef.current.focus();
  }, [innerContainerRef]);

  useEffect(() => {
    if (innerContainerRef.current)
      innerContainerRef.current.scrollTop =
        Math.floor((focusedId - 1) / columnCount) * 200;
  }, [focusedId, columnCount]);

  return (
    <PokemonListS.Container
      ref={innerContainerRef}
      onKeyDown={handleArrowKeyDown}
      onBlur={() => innerContainerRef.current?.focus()}
    >
      <PokemonListS.Grid ref={gridRef} onClick={handleCardClick}>
        {pokemonsWithSelect.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isChose={pokemon.isChose}
            isFocused={focusedId === pokemon.id}
            id={`pokemon-card-${pokemon.id}`}
          />
        ))}
      </PokemonListS.Grid>
    </PokemonListS.Container>
  );
}
