import PokemonPageS from "@/page/pokemon/Pokemon.styled";
import PokemonList from "@/components/features/pokemon/PokemonList";

export default function Pokemon() {
  return (
    <PokemonPageS.Container>
      <PokemonPageS.Title>choose your Pokémon</PokemonPageS.Title>
      <hr style={{ width: "100%" }} color="4ceef9" />
      <PokemonList />
    </PokemonPageS.Container>
  );
}
