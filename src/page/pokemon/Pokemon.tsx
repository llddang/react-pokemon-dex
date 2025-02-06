import styled from "styled-components";
import PokemonDashboard from "@/components/features/pokemon/PokemonDashboard";
import PokemonList from "@/components/features/pokemon/PokemonList";

export default function Pokemon() {
  return (
    <Container>
      <PokemonDashboard />
      <PokemonList />
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
