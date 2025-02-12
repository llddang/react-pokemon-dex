import media from "@/styles/media";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.sm`
    display: none;
  `}
`;

const Image = styled.img`
  width: 160px;
  filter: drop-shadow(0 0 2px #4ceef9);
`;

const Caption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const PokemonFocusedCardS = {
  Container,
  Image,
  Caption,
};

export default PokemonFocusedCardS;
