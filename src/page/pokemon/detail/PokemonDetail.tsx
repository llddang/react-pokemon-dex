import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const pokemonId = useParams().id;
  return <h1>PokemonDetail {pokemonId}</h1>;
}
