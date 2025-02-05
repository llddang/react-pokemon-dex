import styled from "styled-components";
import ButtonLink from "@/components/common/ButtonLink";

export default function Home() {
  return (
    <HomeContainer>
      <img src="/public/pokemon_logo.png" alt="포켓몬 로고" />
      <ButtonLink $size="lg" $rounded="xl" href="pokemon">
        포켓몬 도감 시작하기
      </ButtonLink>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  padding-bottom: 5%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    min-width: min(80%, 300px);
    width: 55%;
    max-width: 700px;
  }
`;
