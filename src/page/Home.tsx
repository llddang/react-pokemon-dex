import ButtonLink from "@/components/common/ButtonLink";
import { HomeContainer } from "@/page/Home.styled";

export default function Home() {
  return (
    <HomeContainer>
      <div>
        <img src="/pokemon_logo.png" alt="포켓몬 로고" />
        <ButtonLink $size="lg" $rounded="xl" to="pokemon">
          포켓몬 도감 시작하기
        </ButtonLink>
      </div>
      <img src="/pikkachu.png" alt="피카츄" />
    </HomeContainer>
  );
}
