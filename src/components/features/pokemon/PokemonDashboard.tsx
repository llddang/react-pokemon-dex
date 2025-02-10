import React from "react";
import PokemonDashboardS from "@/components/features/pokemon/PokemonDashboard.styled";
import PokemonFocusedCard from "@/components/features/pokemon/PokemonFocusedCard";
import ButtonLink from "@/components/common/ButtonLink";
import Button from "@/components/common/Button";
import { MAX_POKEMON_COUNT } from "@/constants";
import usePokemonsStore from "@/lib/hooks/usePokemonsStore";
import useFocusedPokemonStore from "@/lib/hooks/useFocusedPokemonStore";

export default function PokemonDashboard() {
  const { chosePokemons, togglePokemon, isChose } = usePokemonsStore();
  const { focusedPokemon, updateFocusedPokemon } = useFocusedPokemonStore();

  const restPokemons = Array.from(
    { length: MAX_POKEMON_COUNT - chosePokemons.length },
    (_, i) => i
  );

  function handleChosePokemonHover(e: React.MouseEvent<HTMLDivElement>) {
    const chosePokemon = (e.target as HTMLElement).closest("a");
    if (!chosePokemon) return;
    const pokemonId = Number(chosePokemon.id.split("-").at(-1));
    updateFocusedPokemon(pokemonId);
  }

  return (
    <PokemonDashboardS.Container>
      <div>
        <PokemonDashboardS.GridBox onMouseMove={handleChosePokemonHover}>
          {chosePokemons.map((p) => (
            <PokemonDashboardS.PokemonLink
              key={p.id}
              id={`chose-pokemon-${p.id}`}
              to={`/pokemon/detail/${p.id}`}
            >
              <img src={p.imageUrl} alt={p.name} />
            </PokemonDashboardS.PokemonLink>
          ))}
          {restPokemons.map((key) => (
            <PokemonDashboardS.EmptyImg
              key={key}
              src="/pokemon_ball.png"
              alt="포켓몬 볼"
            />
          ))}
        </PokemonDashboardS.GridBox>
        <PokemonDashboardS.Buttons>
          <Button onClick={() => togglePokemon(focusedPokemon.id)}>
            {isChose(focusedPokemon.id) ? "제거하기" : "추가하기"}
          </Button>
          <ButtonLink
            href={`/pokemon/detail/${focusedPokemon.id}`}
            $variant="outline"
          >
            상세보기
          </ButtonLink>
        </PokemonDashboardS.Buttons>
      </div>
      <PokemonFocusedCard focusedId={focusedPokemon.id} />
    </PokemonDashboardS.Container>
  );
}
