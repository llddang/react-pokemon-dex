import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Typography from "@/components/common/Typography";
import ButtonLink from "@/components/common/ButtonLink";
import PokemonActionButtons from "@/components/features/pokemon-detail/PokemonActionButtons";
import PokemonDetailS from "@/page/pokemon/detail/PokemonDetail.styled";
import { formatNumber } from "@/lib/utils/format.util";
import useFocusedPokemonStore from "@/lib/hooks/useFocusedPokemonStore";
import { POKEMON_DATA } from "@/mocks";

export default function PokemonDetail() {
  const { updateFocusedPokemon } = useFocusedPokemonStore();
  const pokemonId = Number(useParams().id);
  const pokemon = POKEMON_DATA.find((pokemon) => pokemon.id === pokemonId);
  const maxId = POKEMON_DATA.at(-1)?.id || 0;

  const navigate = useNavigate();

  useEffect(() => {
    updateFocusedPokemon(pokemonId);
  }, [updateFocusedPokemon, pokemonId]);

  if (!pokemon) {
    navigate(-1);
    return null;
  }

  return (
    <PokemonDetailS.Container>
      <PokemonDetailS.Head>
        <PokemonDetailS.Title>
          <Typography $variant="h4">
            No. {formatNumber(pokemon.id, 3)}
          </Typography>
          <Typography $variant="h4">{pokemon.name}</Typography>
        </PokemonDetailS.Title>
        <div>
          {pokemon.types.map((type) => (
            <Typography key={type}>{type}</Typography>
          ))}
        </div>
      </PokemonDetailS.Head>
      <PokemonDetailS.Body>
        <ButtonLink
          to={`/pokemon/detail/${pokemonId - 1 || maxId}`}
          $variant="ghost"
          $color="secondary"
        >
          <MdArrowBackIosNew />
        </ButtonLink>
        <img src={pokemon.imageUrl} alt={pokemon.name} />
        <ButtonLink
          to={`/pokemon/detail/${(pokemonId + 1) % maxId || maxId}`}
          $variant="ghost"
          $color="secondary"
        >
          <MdArrowForwardIos />
        </ButtonLink>
      </PokemonDetailS.Body>
      <Typography>{pokemon.description}</Typography>
      <PokemonActionButtons pokemonId={pokemon.id} />
    </PokemonDetailS.Container>
  );
}
