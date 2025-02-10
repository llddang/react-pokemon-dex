import Typography from "@/components/common/Typography";
import PokemonCardS from "@/components/features/pokemon/PokemonCard.styled";
import { formatNumber } from "@/lib/utils/format.util";
import { Pokemon } from "@/types/pokemon.dto";

interface PokemonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: Pokemon;
  isChose: boolean;
  isFocused: boolean;
}

export default function PokemonCard({
  pokemon,
  isChose,
  isFocused,
  ...props
}: PokemonCardProps) {
  return (
    <PokemonCardS.Container
      $isFocused={isFocused}
      $isChose={isChose}
      {...props}
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
