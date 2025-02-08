import React, { SetStateAction, useEffect, useRef } from "react";
import PokemonListS from "@/components/features/pokemon/PokemonList.styled";
import PokemonCard from "@/components/features/pokemon/PokemonCard";
import { useGridColumnCount } from "@/lib/hooks/useGridColumCount";
import { POKEMON_DATA } from "@/mocks";

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
  const maxIdx = POKEMON_DATA.length;

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
        // TODO: 뭔가 하기.
        break;
      default:
        break;
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
      onMouseMove={handleCardHover}
    >
      <PokemonListS.Grid ref={gridRef}>
        {POKEMON_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            cardType="ADD"
            isSelected={focusedId === pokemon.id}
          />
        ))}
      </PokemonListS.Grid>
    </PokemonListS.Container>
  );
}
