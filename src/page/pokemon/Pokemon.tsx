import PokemonPageS from "@/page/pokemon/Pokemon.styled";
import PokemonList from "@/components/features/pokemon/PokemonList";
import PokemonDashboard from "@/components/features/pokemon/PokemonDashboard";
import PokemonUsageGuideModal from "@/components/features/pokemon/PokemonUsageGuideModal";

export default function Pokemon() {
  return (
    <>
      <PokemonPageS.Container>
        <PokemonPageS.Title>choose your Pokémon</PokemonPageS.Title>
        <hr />
        <PokemonList />
        <PokemonDashboard />
      </PokemonPageS.Container>
      <PokemonUsageGuideModal />
    </>
  );
}
