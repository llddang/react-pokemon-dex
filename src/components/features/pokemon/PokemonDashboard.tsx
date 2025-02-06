import Typography from "@/components/common/Typography";
import PokemonCard from "@/components/features/pokemon/PokemonCard";
import PokemonDashboardS from "@/components/features/pokemon/PokemonDashboard.styles";
import { PokemonsContext } from "@/contexts/pokemon.context";
import { useContext } from "react";

export default function PokemonDashboard() {
  const pokemons = useContext(PokemonsContext);

  const restPokemon = Array.from(
    { length: 6 - pokemons.length },
    (_, idx) => idx
  );

  return (
    <PokemonDashboardS.Container>
      <Typography $variant="h1">나만의 포켓몬</Typography>
      <PokemonDashboardS.List>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} cardType="DELETE" />
        ))}
        {restPokemon.map((id) => (
          <PokemonDashboardS.EmptyImage
            key={id}
            style={{ width: "100%" }}
            src="/public/pokemon_ball.png"
            alt="포켓몬 볼"
          />
        ))}
      </PokemonDashboardS.List>
    </PokemonDashboardS.Container>
  );
}
