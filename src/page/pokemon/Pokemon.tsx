import { useState } from "react";
import styled from "styled-components";
import PokemonDashboard from "@/components/features/pokemon/PokemonDashboard";
import PokemonList from "@/components/features/pokemon/PokemonList";

export default function Pokemon() {
  const [myPokemonIds, setMyPokemonIds] = useState<number[]>([]);

  return (
    <Container>
      <PokemonDashboard
        pokemonIds={myPokemonIds}
        setPokemonIdx={setMyPokemonIds}
      />
      <PokemonList pokemonIds={myPokemonIds} setPokemonIdx={setMyPokemonIds} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 30px;
  > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;
