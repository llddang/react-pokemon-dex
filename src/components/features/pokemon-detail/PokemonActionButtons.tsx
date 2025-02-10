import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@/components/common/Button";
import ButtonLink from "@/components/common/ButtonLink";
import usePokemonsStore from "@/lib/hooks/usePokemonsStore";

interface PokemonActionButtonsProps {
  pokemonId: number;
}

export default function PokemonActionButtons({
  pokemonId,
}: PokemonActionButtonsProps) {
  const { isChose, togglePokemon } = usePokemonsStore();

  const navigate = useNavigate();
  function handleDexLinkButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate("/pokemon", { state: { focusedId: pokemonId } });
  }

  return (
    <Buttons>
      <Button onClick={() => togglePokemon(pokemonId)}>
        {isChose(pokemonId) ? "제거하기" : "추가하기"}
      </Button>
      <ButtonLink onClick={handleDexLinkButtonClick} $variant="outline">
        뒤로가기
      </ButtonLink>
    </Buttons>
  );
}

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
