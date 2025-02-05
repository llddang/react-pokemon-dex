import ButtonLink from "@/components/common/ButtonLink";
import Typography from "@/components/common/Typography";
import { POKEMON_DATA } from "@/mocks";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function PokemonDetail() {
  const pokemonId = Number(useParams().id);
  const pokemon = POKEMON_DATA.find((pokemon) => pokemon.id === pokemonId);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    return () => {
      if (state?.scrollPosition) {
        window.scrollTo(0, state.scrollPosition);
      }
    };
  }, [state]);

  if (!pokemon) {
    navigate(-1);
    return <></>;
  }

  return (
    <Container>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <Typography $variant="h3">{pokemon.name}</Typography>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <ButtonLink
        href=".."
        $color="secondary"
        $size="sm"
        $rounded="xl"
        onClick={handleBack}
      >
        뒤돌아가기
      </ButtonLink>
    </Container>
  );
}

const Container = styled.main`
  width: fit-content;
  margin: 10% auto 0;
  padding: 20px;
  text-align: center;

  & > img {
    width: 300px;
    max-width: 80%;
  }

  ${Typography} {
    color: red;
  }

  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;
