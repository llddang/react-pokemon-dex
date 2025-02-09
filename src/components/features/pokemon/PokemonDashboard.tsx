import React, { SetStateAction } from "react";
import { useSelector } from "react-redux";
import PokemonDashboardS from "@/components/features/pokemon/PokemonDashboard.styled";
import PokemonFocusedCard from "@/components/features/pokemon/PokemonFocusedCard";
import { RootState } from "@/store/redux";
import { MAX_POKEMON_COUNT } from "@/constants";
import { useNavigate } from "react-router-dom";

export interface PokemonDashboardProps {
  focusedId: number;
  setFocusedId: React.Dispatch<SetStateAction<number>>;
}

export default function PokemonDashboard({
  focusedId,
  setFocusedId,
}: PokemonDashboardProps) {
  const navigate = useNavigate();

  const chosePokemons = useSelector((state: RootState) => state.pokemon);
  const restPokemons = Array.from(
    { length: MAX_POKEMON_COUNT - chosePokemons.length },
    (_, i) => i
  );

  function handleChosePokemonHover(e: React.MouseEvent<HTMLDivElement>) {
    const chosePokemon = (e.target as HTMLElement).closest("a");
    if (!chosePokemon) return;
    const pokemonId = Number(chosePokemon.id.split("-").at(-1));
    setFocusedId(pokemonId);
  }

  function handleChosePokemonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const pokemonLinkId = (e.currentTarget as HTMLElement).id;
    const pokemonId = Number(pokemonLinkId.split("-").at(-1));
    navigate(`/pokemon/detail/${pokemonId}`, {
      state: { focusedId: pokemonId },
    });
  }

  return (
    <PokemonDashboardS.Container>
      <PokemonDashboardS.GridBox onMouseMove={handleChosePokemonHover}>
        {chosePokemons.map((p) => (
          <PokemonDashboardS.PokemonLink
            key={p.id}
            id={`chose-pokemon-${p.id}`}
            to={`/pokemon/detail/${p.id}`}
            onClick={handleChosePokemonClick}
          >
            <img src={p.imageUrl} alt={p.name} />
          </PokemonDashboardS.PokemonLink>
        ))}
        {restPokemons.reverse().map((key) => (
          <PokemonDashboardS.EmptyImg
            key={key}
            src="/public/pokemon_ball.png"
            alt="포켓몬 볼"
          />
        ))}
      </PokemonDashboardS.GridBox>
      <PokemonFocusedCard focusedId={focusedId} />
    </PokemonDashboardS.Container>
  );
}
