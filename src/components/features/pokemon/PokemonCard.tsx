import PokemonCardS from "@/components/features/pokemon/PokemonCard.styles";
import { Pokemon } from "@/types/pokemon.dto";

interface PokemonCardProps {
  pokemon: Omit<Pokemon, "description" | "types">;
  cardType: "ADD" | "DELETE";
  onActionClick: (id: number) => void;
}

export default function PokemonCard({
  pokemon,
  cardType,
  onActionClick,
}: PokemonCardProps) {
  function handleButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    onActionClick(pokemon.id);
  }

  return (
    <PokemonCardS.Container to={`/pokemon/detail/${pokemon.id}`}>
      <PokemonCardS.Image src={pokemon.imageUrl} alt={pokemon.name} />
      <PokemonCardS.Name>{pokemon.name}</PokemonCardS.Name>
      <PokemonCardS.Description>
        No. {formatNumber(pokemon.id)}
      </PokemonCardS.Description>
      <PokemonCardS.Button onClick={handleButtonClick}>
        {cardType === "ADD" ? "추가" : "삭제"}
      </PokemonCardS.Button>
    </PokemonCardS.Container>
  );
}

function formatNumber(num: number, width: number = 3) {
  return String(num).padStart(width, "0");
}
