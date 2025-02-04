import PokemonCard from "@/components/features/pokemon/PokemonCard";
import PokemonListS from "@/components/features/pokemon/PokemonList.styles";
import { POKEMON_DATA } from "@/mocks";
import { SetStateAction } from "react";

export interface PokemonListProps {
  pokemonIds: number[];
  setPokemonIdx: React.Dispatch<SetStateAction<number[]>>;
}

export default function PokemonList({
  pokemonIds,
  setPokemonIdx,
}: PokemonListProps) {
  function handleAddPokemonClick(id: number) {
    if (pokemonIds.length >= 6) {
      alert("noooooooo");
      return;
    }
    if (pokemonIds.includes(id)) {
      alert("duplicated...");
      return;
    }
    setPokemonIdx((prev) => [...prev, id]);
  }

  return (
    <PokemonListS.Container>
      {POKEMON_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          cardType="ADD"
          onActionClick={handleAddPokemonClick}
        />
      ))}
    </PokemonListS.Container>
  );
}
