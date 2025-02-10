import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Typography from "@/components/common/Typography";
import ButtonLink from "@/components/common/ButtonLink";
import PokemonDetailS from "@/page/pokemon/detail/PokemonDetail.styled";
import { formatNumber } from "@/lib/utils/format.util";
import { POKEMON_DATA } from "@/mocks";
import PokemonActionButtons from "@/components/features/pokemon-detail/PokemonActionButtons";

export default function PokemonDetail() {
  const pokemonId = Number(useParams().id);
  const pokemon = POKEMON_DATA.find((pokemon) => pokemon.id === pokemonId);
  const maxId = POKEMON_DATA.at(-1)?.id || 0;

  const navigate = useNavigate();

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
          href={`/pokemon/detail/${pokemonId - 1 || maxId}`}
          $variant="ghost"
          $color="secondary"
        >
          <MdArrowBackIosNew />
        </ButtonLink>
        <img src={pokemon.imageUrl} alt={pokemon.name} />
        <ButtonLink
          href={`/pokemon/detail/${(pokemonId + 1) % maxId || maxId}`}
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
