import { POKEMON_DATA } from "@/mocks";
import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function PokemonDetail() {
  const pokemonId = Number(useParams().id);
  const pokemon = POKEMON_DATA.find((pokemon) => pokemon.id === pokemonId);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    return () => {
      if (state?.scrollPosition) {
        window.scrollTo(0, state.scrollPosition);
      }
    };
  }, [state]);

  return (
    <PokemonDetailS.Container>
      <img src={pokemon?.imageUrl} alt={pokemon?.name} />
      <h3>{pokemon?.name}</h3>
      <p>타입: {pokemon?.types.join(", ")}</p>
      <p>{pokemon?.description}</p>
      <Link
        to=".."
        onClick={(e) => {
          e.preventDefault();
          handleBack();
        }}
      >
        뒤돌아가기
      </Link>
    </PokemonDetailS.Container>
  );
}

const Container = styled.main``;

const PokemonDetailS = {
  Container,
};
