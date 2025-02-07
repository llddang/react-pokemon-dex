import styled from "styled-components";
import PokemonCard from "@/components/features/pokemon/PokemonCard";
import { POKEMON_DATA } from "@/mocks";

export default function PokemonList() {
  return (
    <Container>
      {POKEMON_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} cardType="ADD" />
      ))}
    </Container>
  );
}

const Container = styled.main`
  min-width: 305px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 30px;
  border-radius: var(--radius-lg);

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #dddddd;
`;
