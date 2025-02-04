import PokemonDashboard from "@/components/features/pokemon/PokemonDashboard";
import PokemonList from "@/components/features/pokemon/PokemonList";
import { useState } from "react";
import styled from "styled-components";

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

const PokedexContainer = styled.div`
  padding: 30px;
  > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;
