import Typography from "@/components/common/Typography";
import media from "@/styles/media";
import styled from "styled-components";

const Container = styled.main`
  height: 100%;
  padding: 30px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 20px;
  ${media.sm`
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
`;

const PokemonPageS = {
  Container,
  Title,
};

export default PokemonPageS;
