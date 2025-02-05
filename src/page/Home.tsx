import Typography from "@/components/common/Typography";
import { HomeContainer, PokemonLogoImg, ToDexLink } from "./Home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <PokemonLogoImg src="/public/pokemon_logo.png" alt="포켓몬 로고" />
      <ToDexLink to="pokedex">
        <Typography $variant="h3">포켓몬 도감 시작하기</Typography>
      </ToDexLink>
    </HomeContainer>
  );
}
