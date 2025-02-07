import React, { useEffect, useRef, useState } from "react";
import PokemonListS from "@/components/features/pokemon/PokemonList.styled";
import PokemonCard from "@/components/features/pokemon/PokemonCard";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { POKEMON_DATA } from "@/mocks";

export default function PokemonList() {
  const [selectedIdx, setSelectedIdx] = useState(1);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();
  const maxIdx = POKEMON_DATA.length;

  function handleArrowKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    switch (e.key) {
      case "ArrowRight":
        return setSelectedIdx((prev) => (prev + 1 <= maxIdx ? prev + 1 : 1));
      case "ArrowLeft":
        return setSelectedIdx((prev) => (prev - 1 > 0 ? prev - 1 : maxIdx));
      case "Enter":
        console.log("enter !!");
        break;
      default:
        break;
    }
  }

  function handleCardHover(e: React.MouseEvent<HTMLDivElement>) {
    const card = (e.target as HTMLElement).closest("a");
    if (!card) return;

    const id = Number(card.getAttribute("href")?.split("/").at(-1));
    setSelectedIdx(id);
  }

  useEffect(() => {
    if (innerContainerRef.current) innerContainerRef.current.focus();
  }, [innerContainerRef]);

  useEffect(() => {
    const columnCount = windowWidth > 640 ? (windowWidth > 1024 ? 6 : 4) : 2;
    if (innerContainerRef.current)
      innerContainerRef.current.scrollTop =
        Math.floor((selectedIdx - 1) / columnCount) * 200;
  }, [selectedIdx, windowWidth]);

  return (
    <PokemonListS.Container
      ref={innerContainerRef}
      onKeyDown={handleArrowKeyDown}
      onBlur={() => innerContainerRef.current?.focus()}
      onMouseMove={handleCardHover}
    >
      <PokemonListS.Grid>
        {POKEMON_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            cardType="ADD"
            isSelected={selectedIdx === pokemon.id}
          />
        ))}
      </PokemonListS.Grid>
    </PokemonListS.Container>
  );
}
