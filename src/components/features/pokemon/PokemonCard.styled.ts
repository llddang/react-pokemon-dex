import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "@/components/common/Typography";
import media from "@/styles/media";
import CardChip from "@/components/common/CardChip";

interface ContainerProps {
  $isFocused: boolean;
}
const Container = styled(Link)<ContainerProps>`
  width: 130px;
  height: 170px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  ${media.sm` width: 100px `}
  ${(props) =>
    props.$isFocused &&
    `
      transform: scale(110%);
      && > svg {  
        border: 2px solid #4ceef9;
        box-shadow: #4ceef9 2px 4px 12px;
      }
      `};

  ${media.mobileHeight` 
    width: 80px;
    height: 120px;
  `}
`;

const Content = styled(CardChip)`
  border-radius: var(--radius-lg);
  border: 1px solid #4ceef9;
  box-shadow: #4ceef94d 2px 4px 8px;
  &:hover {
    border: 2px solid #4ceef9;
    box-shadow: #4ceef9 2px 4px 12px;
  }
`;

const Caption = styled.div`
  padding: 0 4px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  ${Typography} {
    font-weight: 700;
  }
  ${media.mobileHeight`
    flex-direction: column;
  `}
`;

const PokemonCardS = {
  Container,
  Content,
  Caption,
};
export default PokemonCardS;
