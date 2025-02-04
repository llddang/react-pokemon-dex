import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokemonLogoImg = styled.img`
  max-width: 55%;
`;

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

export const ToDexLink = styled(Link)`
  color: white;
  background-color: red;
  border: 1px solid black;
  border-radius: 10rem;
  padding: 0.625rem;

  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    background-color: darkred;
  }
  &:active {
    background-color: red;
  }
`;
