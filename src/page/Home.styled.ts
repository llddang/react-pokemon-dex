import media from "@/styles/media";
import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
  padding-bottom: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    min-width: min(20%, 300px);
    width: 60%;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
      width: 100%;
    }
  }
  > img {
    width: 30%;
    ${media.sm`
      display: none;
    `}
  }
`;
