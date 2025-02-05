import media from "@/styles/media";
import styled from "styled-components";

const Container = styled.main`
  min-width: 305px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 20px;
  border-radius: var(--radius-lg);

  > p {
    text-align: center;
    color: red;
    margin: 16px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  justify-items: center;

  ${media.lg`
    grid-template-columns: repeat(6, 1fr);
  `}
`;

const EmptyImage = styled.img`
  width: 100px;
  max-width: 100px;

  border: 2px dotted #bbb;
  border-radius: var(--radius-lg);
  padding: 20px;

  box-sizing: border-box;

  background-color: white;
`;

const PokemonDashboardS = {
  Container,
  List,
  EmptyImage,
};

export default PokemonDashboardS;
