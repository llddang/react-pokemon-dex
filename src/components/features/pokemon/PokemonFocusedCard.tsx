import Typography from "@/components/common/Typography";
import PokemonFocusedCardS from "@/components/features/pokemon/PokemonFocusedCard.styled";
import { formatNumber } from "@/lib/utils/format.util";
import { POKEMON_DATA } from "@/mocks";

interface PokemonFocusedCardProps {
  focusedId: number;
}

export default function PokemonFocusedCard({
  focusedId,
}: PokemonFocusedCardProps) {
  const focusedPokemon = POKEMON_DATA.find((p) => p.id === focusedId);
  if (!focusedPokemon) return null;

  return (
    <PokemonFocusedCardS.Container>
      <PokemonFocusedCardS.Image src={focusedPokemon?.imageUrl} />
      <PokemonFocusedCardS.Caption>
        <Typography>No. {formatNumber(focusedPokemon.id)}</Typography>
        <Typography>{focusedPokemon.name}</Typography>
      </PokemonFocusedCardS.Caption>
    </PokemonFocusedCardS.Container>
  );
}
