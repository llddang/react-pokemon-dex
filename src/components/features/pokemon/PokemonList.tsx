import React, { SetStateAction, useEffect, useRef } from "react";
import PokemonListS from "@/components/features/pokemon/PokemonList.styled";
import PokemonCard from "@/components/features/pokemon/PokemonCard";
import { useGridColumnCount } from "@/lib/hooks/useGridColumCount";
import { POKEMON_DATA } from "@/mocks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/redux";
import { addPokemon, deletePokemon } from "@/store/pokemon.slice";

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
  const chosePokemon = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();

  const pokemonsWithSelect = POKEMON_DATA.map((p) =>
    chosePokemon.some((cp) => cp.id === p.id)
      ? { ...p, isSelected: true }
      : { ...p, isSelected: false }
  );
  const maxIdx = pokemonsWithSelect.length;

  function handleArrowKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    e.preventDefault();
    switch (e.key) {
      case "D":
      case "d":
      case "ArrowRight":
        return setFocusedId((prev) => (prev + 1 <= maxIdx ? prev + 1 : 1));
      case "A":
      case "a":
      case "ArrowLeft":
        return setFocusedId((prev) => (prev - 1 > 0 ? prev - 1 : maxIdx));
      case "W":
      case "w":
      case "ArrowUp":
        return setFocusedId(
          (prev) => (prev + maxIdx - columnCount) % maxIdx || maxIdx
        );
      case "S":
      case "s":
      case "ArrowDown":
        return setFocusedId((prev) => (prev + columnCount) % maxIdx || maxIdx);
      case "Enter":
        return storePokemon();
      default:
        break;
    }
  }

  function storePokemon() {
    const focusedPokemon = pokemonsWithSelect.find((p) => p.id === focusedId);
    if (!focusedPokemon) return;

    if (!focusedPokemon.isSelected) {
      if (chosePokemon.length >= 6) return alert("더 이상 선택할 수 없습니다.");
      return dispatch(addPokemon(focusedPokemon));
    } else {
      return dispatch(deletePokemon(focusedPokemon.id));
    }
  }

  function handleCardHover(e: React.MouseEvent<HTMLDivElement>) {
    const card = (e.target as HTMLElement).closest("a");
    if (!card) return;

    const id = Number(card.getAttribute("href")?.split("/").at(-1));
    setFocusedId(id);
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
      <PokemonListS.Grid ref={gridRef} onMouseMove={handleCardHover}>
        {pokemonsWithSelect.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            cardType="ADD"
            isSelected={pokemon.isSelected}
            isFocused={focusedId === pokemon.id}
          />
        ))}
      </PokemonListS.Grid>
    </PokemonListS.Container>
  );
}
