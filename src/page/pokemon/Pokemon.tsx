import PokemonPageS from "@/page/pokemon/Pokemon.styled";
import PokemonList from "@/components/features/pokemon/PokemonList";
import { useState } from "react";
import PokemonDashboard from "@/components/features/pokemon/PokemonDashboard";
import { useLocation } from "react-router-dom";

export default function Pokemon() {
  const { state } = useLocation();
  const [focusedId, setFocusedId] = useState<number>(state?.focusedId ?? 1);

  return (
    <PokemonPageS.Container>
      <PokemonPageS.Title>choose your Pokémon</PokemonPageS.Title>
      <hr style={{ width: "100%" }} color="4ceef9" />
      <PokemonList focusedId={focusedId} setFocusedId={setFocusedId} />
      <PokemonDashboard focusedId={focusedId} setFocusedId={setFocusedId} />
    </PokemonPageS.Container>
  );
}
