import styled from "styled-components";

const Container = styled.main`
  min-width: 305px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 30px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

const PokemonListS = {
  Container,
};
export default PokemonListS;
