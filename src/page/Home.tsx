import {
  HomeContainer,
  PokemonLogoImg,
  ToDexLink,
} from "@/components/features/home/Home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <PokemonLogoImg src="/public/pokemon_logo.png" alt="포켓몬 로고" />
      <ToDexLink to="pokedex">포켓몬 도감 시작하기</ToDexLink>
    </HomeContainer>
  );
}
