import media from "@/styles/media";
import styled from "styled-components";

const Container = styled.div`
  outline: none;
  min-width: 305px;
  flex-grow: 1;
  padding: 10px 30px;
  box-sizing: border-box;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ${media.sm`
    padding: 10px 0;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  row-gap: 30px;
  ${media.md`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.lg`
    grid-template-columns: repeat(6, 1fr);
  `}
`;

const PokemonListS = {
  Container,
  Grid,
};
export default PokemonListS;
