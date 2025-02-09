import media from "@/styles/media";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: end;
  gap: 10px;
  ${media.sm`
    flex-direction: column-reverse;
    align-items: center;
  `}
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${media.md`
    grid-template-columns: repeat(6, 1fr);
  `}
`;

const PokemonLink = styled(Link)`
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 3px solid #888;
  overflow: hidden;

  @media (max-height: 680px) {
    width: 30px;
    height: 30px;
  }

  > img {
    width: 100%;
    height: 100%;
  }
`;

const EmptyImg = styled.img`
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 3px solid #888;
  padding: 10px;
  overflow: hidden;

  @media (max-height: 680px) {
    width: 30px;
    height: 30px;
    padding: 5px;
  }
`;

const PokemonDashboardS = {
  Container,
  GridBox,
  PokemonLink,
  EmptyImg,
};

export default PokemonDashboardS;
