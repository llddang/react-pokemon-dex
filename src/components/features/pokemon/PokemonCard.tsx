import { useNavigate } from "react-router-dom";
import Typography from "@/components/common/Typography";
import PokemonCardS from "@/components/features/pokemon/PokemonCard.styled";
import { formatNumber } from "@/lib/utils/format.util";
import { Pokemon } from "@/types/pokemon.dto";

interface PokemonCardProps {
  pokemon: Pokemon;
  cardType: "ADD" | "DELETE";
  isSelected: boolean;
}

export default function PokemonCard({ pokemon, isSelected }: PokemonCardProps) {
  const navigate = useNavigate();

  function handleGoDetailButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    navigate(`/pokemon/detail/${pokemon.id}`, {
      state: { selectedId: pokemon.id },
    });
  }

  return (
    <PokemonCardS.Container
      $isSelected={isSelected}
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
