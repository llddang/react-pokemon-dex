import Typography from "@/components/common/Typography";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  width: fit-content;
  margin: 10% auto 0;
  padding: 20px;
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 300px;
  max-width: 80%;
`;

const Name = styled(Typography).attrs({
  $variant: "h1" as const,
})`
  color: rgb(255, 0, 0);
`;

const GLink = styled(Link)`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: var(--radius-sm);
`;

const PokemonDetailS = {
  Container,
  Image,
  Name,
  GLink,
};
export default PokemonDetailS;
