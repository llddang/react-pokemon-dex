import styled from "styled-components";
import media from "@/styles/media";

const Container = styled.div`
  display: none;

  ${media.mobileHeight`
    display: flex;
    align-items: end;
    gap: 10px;
  `}
`;

const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonMobilePadS = {
  Container,
  KeyContainer,
};
export default PokemonMobilePadS;
