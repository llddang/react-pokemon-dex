import PokemonDashboard from "@/components/features/pokemon/PokemonDashboard";
import PokemonList from "@/components/features/pokemon/PokemonList";
import { PokedexContainer } from "@/page/pokedex/Pokedex.styles";
import { useState } from "react";

export default function Pokedex() {
  const [myPokemonIds, setMyPokemonIds] = useState<number[]>([]);

  return (
    <PokedexContainer>
      <PokemonDashboard
        pokemonIds={myPokemonIds}
        setPokemonIdx={setMyPokemonIds}
      />
      <PokemonList pokemonIds={myPokemonIds} setPokemonIdx={setMyPokemonIds} />
    </PokedexContainer>
  );
}
