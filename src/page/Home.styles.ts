import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  padding-bottom: 5%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokemonLogoImg = styled.img`
  min-width: min(80%, 300px);
  width: 55%;
  max-width: 700px;
`;
