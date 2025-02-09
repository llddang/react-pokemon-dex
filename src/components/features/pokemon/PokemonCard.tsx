import { useNavigate } from "react-router-dom";
import Typography from "@/components/common/Typography";
import PokemonCardS from "@/components/features/pokemon/PokemonCard.styled";
import { formatNumber } from "@/lib/utils/format.util";
import { Pokemon } from "@/types/pokemon.dto";

interface PokemonCardProps {
  pokemon: Pokemon;
  cardType: "ADD" | "DELETE";
  isSelected: boolean;
  isFocused: boolean;
}

export default function PokemonCard({ pokemon, isFocused }: PokemonCardProps) {
  const navigate = useNavigate();

  function handleGoDetailButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    navigate(`/pokemon/detail/${pokemon.id}`, {
      state: { focusedId: pokemon.id },
    });
  }

  return (
    <PokemonCardS.Container
      $isFocused={isFocused}
      to={`/pokemon/detail/${pokemon.id}`}
      onClick={handleGoDetailButtonClick}
    >
      <PokemonCardS.Content pokemonId={pokemon.id} url={pokemon.imageUrl} />
      <PokemonCardS.Caption>
        <Typography $variant="caption">
          No. {formatNumber(pokemon.id)}
        </Typography>
        <Typography $variant="caption">{pokemon.name}</Typography>
      </PokemonCardS.Caption>
    </PokemonCardS.Container>
  );
}
