import ButtonLink from "@/components/common/ButtonLink";
import { HomeContainer } from "@/page/Home.styled";

export default function Home() {
  return (
    <HomeContainer>
      <div>
        <img src="/public/pokemon_logo.png" alt="포켓몬 로고" />
        <ButtonLink $size="lg" $rounded="xl" href="pokemon">
          포켓몬 도감 시작하기
        </ButtonLink>
      </div>
      <img src="/public/pikkachu.png" alt="피카츄" />
    </HomeContainer>
  );
}
