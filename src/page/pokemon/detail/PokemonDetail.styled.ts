import styled from "styled-components";

const Container = styled.main`
  width: 60%;
  padding: 30px;
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  height: fit-content;
  border-bottom: 1px solid white;
  padding: 4px 8px 4px 4px;

  display: flex;
  gap: 20px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > img {
    min-width: 160px;
    width: 100%;
    max-width: 350px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const PokemonDetailS = {
  Container,
  Head,
  Title,
  Body,
  Buttons,
};

export default PokemonDetailS;
