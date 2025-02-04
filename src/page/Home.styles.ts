import { getBorderRadius, getFontSize } from "@/styles/theme.util";
import { Link } from "react-router-dom";
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

export const ToDexLink = styled(Link)`
  color: white;
  background-color: red;
  border: 1px solid black;
  padding: 0.25rem 0.625rem;

  font-weight: 700;

  ${getBorderRadius("lg")}
  ${getFontSize("lg")}

  &:hover {
    background-color: darkred;
  }
  &:active {
    background-color: red;
  }
`;
