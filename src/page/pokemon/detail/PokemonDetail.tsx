import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@/components/common/Typography";
import ButtonLink from "@/components/common/ButtonLink";
import Button from "@/components/common/Button";
import PokemonDetailS from "@/page/pokemon/detail/PokemonDetail.styled";
import { addPokemon, deletePokemon } from "@/store/pokemon.slice";
import { RootState } from "@/store/redux";
import { formatNumber } from "@/lib/utils/format.util";
import { MAX_POKEMON_COUNT } from "@/constants";
import { POKEMON_DATA } from "@/mocks";

export default function PokemonDetail() {
  const pokemonId = Number(useParams().id);
  const pokemon = POKEMON_DATA.find((pokemon) => pokemon.id === pokemonId);
  const chosePokemon = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();
  const maxId = POKEMON_DATA.at(-1)?.id || 0;

  const navigate = useNavigate();

  if (!pokemon) {
    navigate(-1);
    return null;
  }
  const isChose = chosePokemon.some((cp) => cp.id === pokemon.id);

  function handleActionPokemonClick() {
    if (!pokemon) return;
    if (isChose) return dispatch(deletePokemon(pokemon.id));
    if (chosePokemon.length >= MAX_POKEMON_COUNT)
      return alert("더 이상 선택할 수 없습니다.");
    return dispatch(addPokemon(pokemon));
  }

  function handleDexLinkButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate("/pokemon", { state: { focusedId: pokemonId } });
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
      <PokemonDetailS.Buttons>
        <Button onClick={handleActionPokemonClick}>
          {isChose ? "제거하기" : "추가하기"}
        </Button>
        <ButtonLink onClick={handleDexLinkButtonClick} $variant="outline">
          뒤로가기
        </ButtonLink>
      </PokemonDetailS.Buttons>
    </PokemonDetailS.Container>
  );
}
