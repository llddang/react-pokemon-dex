import styled from "styled-components";

const Container = styled.main`
  min-width: 335px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 20px 30px 30px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: red;

  margin: 16px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  justify-items: center;

  ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const EmptyImage = styled.img`
  width: 100px;
  max-width: 100px;

  border: 2px dotted #bbb;
  border-radius: 30px;
  padding: 20px;

  box-sizing: border-box;

  background-color: white;
`;

const PokemonDashboardS = {
  Container,
  Title,
  List,
  EmptyImage,
};

export default PokemonDashboardS;
