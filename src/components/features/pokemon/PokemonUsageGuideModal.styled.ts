import styled from "styled-components";
import media from "@/styles/media";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  width: calc(100% - 60px);
  max-width: 1000px;
  height: fit-content;
  border-radius: var(--radius-xl);
  padding: 20px;
  background-color: #ffffffd2;
  box-sizing: border-box;

  color: black;

  ${media.sm`
    display: none;
  `}
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  > button {
    color: inherit;
    font-size: 32px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

const InfoGroup = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  > img {
    width: 42%;
    margin-right: 8%;
  }
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
  ${media.md`
  > img {
    width: 20%;
    max-width: 200px;
    margin-right: 8%;
  }
  `}
`;

const PokemonUsageGuideModalS = {
  Container,
  Head,
  Content,
  InfoGroup,
};
export default PokemonUsageGuideModalS;
