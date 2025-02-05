import { HomeContainer, PokemonLogoImg } from "./Home.styles";
import ButtonLink from "@/components/common/ButtonLink";
export default function Home() {
  return (
    <HomeContainer>
      <PokemonLogoImg src="/public/pokemon_logo.png" alt="포켓몬 로고" />
      <ButtonLink $size="lg" href="pokedex">
        포켓몬 도감 시작하기
      </ButtonLink>
    </HomeContainer>
  );
}
