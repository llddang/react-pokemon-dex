import ButtonLink from "@/components/common/ButtonLink";
import { POKEMON_DATA } from "@/mocks";
import PokemonDetailS from "@/page/pokemon/detail/PokemonDetail.styles";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
      <PokemonDetailS.Image src={pokemon?.imageUrl} alt={pokemon?.name} />
      <PokemonDetailS.Name>{pokemon?.name}</PokemonDetailS.Name>
      <p>타입: {pokemon?.types.join(", ")}</p>
      <p>{pokemon?.description}</p>
      <ButtonLink
        href=".."
        $color="secondary"
        $size="sm"
        onClick={(e) => {
          e.preventDefault();
          handleBack();
        }}
      >
        뒤돌아가기
      </ButtonLink>
    </PokemonDetailS.Container>
  );
}
