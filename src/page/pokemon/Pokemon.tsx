import { useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonPageS from "@/page/pokemon/Pokemon.styled";
import PokemonList from "@/components/features/pokemon/PokemonList";
import PokemonDashboard from "@/components/features/pokemon/PokemonDashboard";
import PokemonUsageGuideModal from "@/components/features/pokemon/PokemonUsageGuideModal";

export default function Pokemon() {
  const { state } = useLocation();
  const [focusedId, setFocusedId] = useState<number>(state?.focusedId ?? 1);

  return (
    <>
      <PokemonPageS.Container>
        <PokemonPageS.Title>choose your Pokémon</PokemonPageS.Title>
        <hr />
        <PokemonList focusedId={focusedId} setFocusedId={setFocusedId} />
        <PokemonDashboard focusedId={focusedId} setFocusedId={setFocusedId} />
      </PokemonPageS.Container>
      <PokemonUsageGuideModal />
    </>
  );
}
