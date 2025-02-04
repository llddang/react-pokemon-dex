import PokemonCard from "@/components/features/pokemon/PokemonCard";
import PokemonDashboardS from "@/components/features/pokemon/PokemonDashboard.styles";
import { POKEMON_DATA } from "@/mocks";
import { Pokemon } from "@/types/pokemon.dto";
import { SetStateAction } from "react";

export interface Props {
  pokemonIds: number[];
  setPokemonIdx: React.Dispatch<SetStateAction<number[]>>;
}

export default function PokemonDashboard({ pokemonIds, setPokemonIdx }: Props) {
  const myPokemons: Pokemon[] = POKEMON_DATA.filter((pokemon) =>
    pokemonIds.includes(pokemon.id)
  );
  const restPokemon = Array.from(
    { length: 6 - pokemonIds.length },
    (_, idx) => idx
  );

  const handleDeleteButtonClick = (deleteId: number) => {
    setPokemonIdx((prev) => prev.filter((id) => id !== deleteId));
  };

  return (
    <PokemonDashboardS.Container>
      <PokemonDashboardS.Title>나만의 포켓몬</PokemonDashboardS.Title>
      <PokemonDashboardS.List>
        {myPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            cardType="DELETE"
            onActionClick={handleDeleteButtonClick}
          />
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
