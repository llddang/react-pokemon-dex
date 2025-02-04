import PokemonCardS from "@/components/features/pokemon/PokemonCard.styles";
import { Pokemon } from "@/types/pokemon.dto";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    onActionClick(pokemon.id);
  }

  function handleGoDetailButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const scrollPosition = window.scrollY;
    navigate(`/pokemon/detail/${pokemon.id}`, {
      state: { scrollPosition },
    });
  }

  return (
    <PokemonCardS.Container
      to={`/pokemon/detail/${pokemon.id}`}
      onClick={handleGoDetailButtonClick}
    >
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
