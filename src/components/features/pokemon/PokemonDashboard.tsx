import React, { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonDashboardS from "@/components/features/pokemon/PokemonDashboard.styled";
import PokemonFocusedCard from "@/components/features/pokemon/PokemonFocusedCard";
import { RootState } from "@/store/redux";
import { MAX_POKEMON_COUNT } from "@/constants";
import ButtonLink from "@/components/common/ButtonLink";
import Button from "@/components/common/Button";
import { addPokemon, deletePokemon } from "@/store/pokemons.slice";
import { POKEMON_DATA } from "@/mocks";

export interface PokemonDashboardProps {
  focusedId: number;
  setFocusedId: React.Dispatch<SetStateAction<number>>;
}

export default function PokemonDashboard({
  focusedId,
  setFocusedId,
}: PokemonDashboardProps) {
  const dispatch = useDispatch();

  const chosePokemons = useSelector((state: RootState) => state.pokemons);
  const restPokemons = Array.from(
    { length: MAX_POKEMON_COUNT - chosePokemons.length },
    (_, i) => i
  );
  const focusedPokemon = POKEMON_DATA.find((p) => p.id === focusedId);
  const isChose = chosePokemons.some((cp) => cp.id === focusedId);

  function handleChosePokemonHover(e: React.MouseEvent<HTMLDivElement>) {
    const chosePokemon = (e.target as HTMLElement).closest("a");
    if (!chosePokemon) return;
    const pokemonId = Number(chosePokemon.id.split("-").at(-1));
    setFocusedId(pokemonId);
  }

  function handleActionPokemonClick() {
    if (!focusedPokemon) return;
    if (isChose) return dispatch(deletePokemon(focusedPokemon.id));
    if (chosePokemons.length >= MAX_POKEMON_COUNT)
      return alert("더 이상 선택할 수 없습니다.");
    return dispatch(addPokemon(focusedPokemon));
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
          {restPokemons.reverse().map((key) => (
            <PokemonDashboardS.EmptyImg
              key={key}
              src="/public/pokemon_ball.png"
              alt="포켓몬 볼"
            />
          ))}
        </PokemonDashboardS.GridBox>
        <PokemonDashboardS.Buttons>
          <Button onClick={handleActionPokemonClick}>
            {isChose ? "제거하기" : "추가하기"}
          </Button>
          <ButtonLink href={`/pokemon/detail/${focusedId}`} $variant="outline">
            상세보기
          </ButtonLink>
        </PokemonDashboardS.Buttons>
      </div>
      <PokemonFocusedCard focusedId={focusedId} />
    </PokemonDashboardS.Container>
  );
}
