import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-height: 680px), (max-width: 680px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 200px;
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
