import styled from "styled-components";
import Typography from "@/components/common/Typography";
import media from "@/styles/media";
import CardChip from "@/components/common/CardChip";

interface ContainerProps {
  $isChose: boolean;
  $isFocused: boolean;
}
const Container = styled.div<ContainerProps>`
  width: 130px;
  height: 170px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  ${media.sm` width: 100px `}
  ${({ $isFocused }) =>
    $isFocused &&
    `
      transform: scale(110%);
      && > svg {  
        border: 2px solid #4ceef9;
        box-shadow: #4ceef9 2px 4px 12px;
      }
      `};
  ${({ $isChose }) =>
    $isChose &&
    `
      && > svg {  
        border: 2px solid red;
        box-shadow: red 2px 4px 12px;
      }
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
`;

const PokemonCardS = {
  Container,
  Content,
  Caption,
};
export default PokemonCardS;
