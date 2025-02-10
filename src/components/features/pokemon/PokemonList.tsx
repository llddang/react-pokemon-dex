import React, { useEffect, useRef } from "react";
import PokemonListS from "@/components/features/pokemon/PokemonList.styled";
import PokemonCard from "@/components/features/pokemon/PokemonCard";
import { useGridColumnCount } from "@/lib/hooks/useGridColumCount";
import usePokemonsStore from "@/lib/hooks/usePokemonsStore";
import useFocusedPokemonStore from "@/lib/hooks/useFocusedPokemonStore";
import { POKEMON_DATA } from "@/mocks";

import { executeKeyAction, getKeyMapping } from "@/types/keyAction.type";

export default function PokemonList() {
  const { gridRef, columnCount } = useGridColumnCount();
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const { togglePokemon, isChose } = usePokemonsStore();
  const { focusedPokemon, updateFocusedPokemon } = useFocusedPokemonStore();

  function handleArrowKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    e.preventDefault();
    const actionKey = getKeyMapping(e.key);
    if (!actionKey) return;

    executeKeyAction(
      actionKey,
      columnCount,
      focusedPokemon.id,
      updateFocusedPokemon,
      togglePokemon
    );
  }

  function handleCardClick(e: React.MouseEvent<HTMLDivElement>) {
    const card = (e.target as HTMLElement).closest('[id^="pokemon-card-"]');
    if (!card) return;

    const pokemonId = Number(card.id.split("-").at(-1));
    updateFocusedPokemon(pokemonId);
  }

  useEffect(() => {
    if (innerContainerRef.current) innerContainerRef.current.focus();
  }, [innerContainerRef]);

  useEffect(() => {
    if (innerContainerRef.current)
      innerContainerRef.current.scrollTop =
        Math.floor((focusedPokemon.id - 1) / columnCount) * 200;
  }, [focusedPokemon.id, columnCount]);

  return (
    <PokemonListS.Container
      ref={innerContainerRef}
      onKeyDown={handleArrowKeyDown}
      onBlur={() => innerContainerRef.current?.focus()}
    >
      <PokemonListS.Grid ref={gridRef} onClick={handleCardClick}>
        {POKEMON_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isChose={isChose(pokemon.id)}
            isFocused={focusedPokemon.id === pokemon.id}
            id={`pokemon-card-${pokemon.id}`}
          />
        ))}
      </PokemonListS.Grid>
    </PokemonListS.Container>
  );
}
