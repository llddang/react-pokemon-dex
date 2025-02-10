import Typography from "@/components/common/Typography";
import media from "@/styles/media";
import styled from "styled-components";

const Container = styled.main`
  position: relative;
  height: 100%;
  margin: auto;
  padding: 30px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 20px;
  ${media.sm`
    gap: 10px;
  `}
  ${media.mobileHeight` 
    padding: 20px;
    gap: 10px;
  `}
  > hr {
    width: 100%;
    border-color: #4ceef9;
  }
`;

const Title = styled(Typography).attrs({ $variant: "h1" })`
  font-family: "Galmuri9";
  color: #4ceef9;
  text-align: center;
  ${media.mobileHeight` 
    font-size: 22px;
  `}
`;

const PokemonPageS = {
  Container,
  Title,
};

export default PokemonPageS;
