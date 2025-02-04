import { getBorderRadius, getFontSize } from "@/styles/theme.util";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  ${getBorderRadius("lg")}
  padding: 10px 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
    transform: translateY(-10px);
  }
  ${({ theme }) => theme.media.tablet} {
    gap: 8px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100px;
`;

const Name = styled.p`
  font-weight: 700;
  ${getFontSize("lg")}
  display: none;

  ${({ theme }) => theme.media.tablet} {
    display: block;
  }
`;

const Description = styled.span`
  ${getFontSize("md")}
  display: none;

  ${({ theme }) => theme.media.laptop} {
    display: block;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;

const PokemonCardS = {
  Container,
  Image,
  Name,
  Description,
  Button,
};

export default PokemonCardS;
