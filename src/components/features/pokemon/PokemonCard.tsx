import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import media from "@/styles/media";

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
    <Container
      to={`/pokemon/detail/${pokemon.id}`}
      onClick={handleGoDetailButtonClick}
    >
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <Typography $variant="h3">{pokemon.name}</Typography>
      <Typography>No. {formatNumber(pokemon.id)}</Typography>
      <Button $size="sm" onClick={handleButtonClick}>
        {cardType === "ADD" ? "추가" : "삭제"}
      </Button>
    </Container>
  );
}

function formatNumber(num: number, width: number = 3) {
  return String(num).padStart(width, "0");
}

const Container = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  border-radius: var(--radius-xl);
  padding: 10px 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
    transform: translateY(-10px);
  }
  ${media.md`
    gap:8px;
  `}

  & >  img {
    width: 100%;
  }
`;
